import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { RowClickEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { employees, positions, organizationUnits } from 'src/app/shared/mock-data/mock-data';

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

  constructor() {
    this.dataSource = employees;
    this.positions = positions;
    this.organizationUnits = organizationUnits;
    this.gender = [{ GenderID: 1, GenderName: 'Nam' }, { GenderID: 2, GenderName: 'Nữ' }];
  }

  ngOnInit(): void {

  }

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
  onUpdating(event: RowUpdatingEvent) {
    console.log(event);
  }


  /**
   * Delete all data selected in grid
   */
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this.dataSource.splice(key, 1);
    });
    this.dataGrid.instance.refresh();
  }



}
