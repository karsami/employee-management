import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { forkJoin } from 'rxjs';
import { BaseGridComponent } from 'src/app/shared/components/base-grid.component';
import { employees, organizationUnits, positions } from 'src/app/shared/mock-data/mock-data';
import { JobPositionService } from 'src/app/shared/services/api/job-position.service';
import { OrganizationUnitService } from 'src/app/shared/services/api/organization.service';
import { UserService } from 'src/app/shared/services/api/user.service';
import { TransferService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent extends BaseGridComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;
  dataSource: any[] = [];
  gender: any[] = [];
  positions: any[] = [];
  organizationUnits: any[] = [];

  constructor(private _userService: UserService,
    private _jobPosition: JobPositionService,
    private _orgUnitService: OrganizationUnitService,
    public _transferDateSV: TransferService) {
    super(_transferDateSV);
    this.gender = [{ GenderID: 1, GenderName: 'Nam' }, { GenderID: 2, GenderName: 'Nữ' }];
    this.service = _userService;
  }

  ngAfterViewInit(): void {
    this.baseDataGrid = this.dataGrid;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.loadData();
  }

  override loadData() {
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
    })

    this.subscriptions.push(sub);
  }

}
