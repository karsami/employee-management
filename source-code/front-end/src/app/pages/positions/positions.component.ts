import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { positions, organizationUnits } from 'src/app/shared/mock-data/mock-data';
import { JobPositionService } from 'src/app/shared/services/api/job-position.service';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  selectedItemKeys: any[] = [];
  organizations: any[] = [];

  constructor(private _positionService: JobPositionService) {
    this.organizations = organizationUnits;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const sub = this._positionService.getData().subscribe(res => {
      if (res && res.Success) {
        this.dataSource = res.Data;
      } else {
        this.dataSource = positions;
      }
      sub.unsubscribe();
    })
  }

  /**
   * Handle get selected data key express
   */
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  /**
   * Hanlde call API insert employee info
   */
  onInserting(event: any) {
    const sub = this._positionService.insertData(event.data).subscribe(res => {
      this.loadData();
      sub.unsubscribe();
    });
  }

  /**
   * Handle call API update employee info
   * @param event
   */
  onUpdating(event: any) {
    const param = Object.assign(event.oldData, event.newData);
    const sub = this._positionService.updateData(param).subscribe(res => {
      this.loadData();
      sub.unsubscribe();
    })
  }


  /**
   * Delete all data selected in grid
   */
  deleteRecords() {
    this._positionService.deleteMultiple(this.selectedItemKeys).subscribe(res => {
      this.loadData();
      this.dataGrid.instance.refresh();
    })
  }

}
