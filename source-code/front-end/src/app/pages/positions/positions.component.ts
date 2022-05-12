import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { positions, organizationUnits } from 'src/app/shared/mock-data/mock-data';
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

  constructor() {
    this.dataSource = positions;
    this.organizations = organizationUnits;
  }

  ngOnInit(): void {

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
    console.log(event);
  }

  /**
   * Handle call API update employee info
   * @param event
   */
  onUpdating(event: any) {
    console.log(event);
  }


  /**
   * Delete all data selected in grid
   */
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      const index = this.dataSource.findIndex(item => item.JobPositionID == key);
      this.dataSource.splice(index, 1);
    });
    this.dataGrid.instance.refresh();
  }

}
