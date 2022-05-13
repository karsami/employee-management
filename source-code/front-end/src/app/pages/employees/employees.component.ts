import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { forkJoin } from 'rxjs';
import { employees, organizationUnits, positions } from 'src/app/shared/mock-data/mock-data';
import { JobPositionService } from 'src/app/shared/services/api/job-position.service';
import { OrganizationUnitService } from 'src/app/shared/services/api/organization.service';
import { UserService } from 'src/app/shared/services/api/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  gender: any[] = [];
  positions: any[] = [];
  organizationUnits: any[] = [];
  selectedItemKeys: any[] = [];

  constructor(private _userService: UserService,
    private _jobPosition: JobPositionService,
    private _orgUnitService: OrganizationUnitService) {
    this.gender = [{ GenderID: 1, GenderName: 'Nam' }, { GenderID: 2, GenderName: 'Nữ' }];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const users = this._userService.getData();
    const org = this._orgUnitService.getData();
    const jobPositions = this._jobPosition.getData();
    const sub = forkJoin([users, org, jobPositions]).subscribe(res => {
      if (res[0] && res[0].Success) {
        this.dataSource = res[0].Data;
      }
      if (res[1] && res[1].Success) {
        this.organizationUnits = res[1].Data;
      }
      if (res[2] && res[2].Success) {
        this.positions = res[2].Data;
      }
      sub.unsubscribe();
    })


  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  /**
   * Hanlde call API insert employee info
   */
  onInserting(event: RowInsertingEvent) {
    const sub = this._userService.insertData(event.data).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
      } else {
        event.cancel = true;
      }
      this.dataGrid.instance.refresh();
      sub.unsubscribe();
    })
  }

  /**
   * Handle call API update employee info
   * @param event
   */
  onUpdating(event: RowUpdatingEvent) {
    const param = Object.assign(event.oldData, event.newData);
    const sub = this._userService.updateData(param).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
      } else {
        event.cancel = true;
      }
      this.dataGrid.instance.refresh();
      sub.unsubscribe();
    })
  }


  /**
   * Delete all data selected in grid
   */
  deleteRecords() {
    const sub = this._userService.deleteMultiple(this.selectedItemKeys).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
        this.dataGrid.instance.refresh();
      }
      sub.unsubscribe();
    })
  }

}
