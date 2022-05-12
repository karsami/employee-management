import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { contracts } from 'src/app/shared/mock-data/mock-data';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  contractTypes: any[] = [];
  selectedItemKeys: any[] = [];

  constructor() {
    this.dataSource = contracts;
    this.contractTypes = [
      {
        value: 1,
        text: 'Có thời hạn'
      },
      {
        value: 2,
        text: 'Không xác định'
      }
    ];
  }

  ngOnInit(): void {
  }


  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

   /**
   * Hanlde call API insert employee info
   */
    onInserting(event: RowInsertingEvent) {
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
