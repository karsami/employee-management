import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { Subscriber, Subscription } from 'rxjs';
import { contracts } from 'src/app/shared/mock-data/mock-data';
import { ContractService } from 'src/app/shared/services/api/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, OnDestroy {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  contractTypes: any[] = [];
  selectedItemKeys: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(private _contractService: ContractService) {
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const sub = this._contractService.getData().subscribe(res => {
      if (res && res.Success) {
        this.dataSource = res.Data;
      }
    })
    this.subscriptions.push(sub);
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  /**
  * Hanlde call API insert employee info
  */
  onInserting(event: RowInsertingEvent) {
    const sub = this._contractService.insertData(event.data).subscribe(res => {
      this.loadData();
    });
    this.subscriptions.push(sub);
  }

  /**
   * Handle call API update employee info
   * @param event
   */
  onUpdating(event: RowUpdatingEvent) {
    const param = Object.assign(event.oldData, event.newData);
    const sub = this._contractService.updateData(param).subscribe(res => {
      this.loadData();
    });
    this.subscriptions.push(sub);
  }

  /**
   * Delete all data selected in grid
   */
  deleteRecords() {
    this._contractService.deleteMultiple(this.selectedItemKeys).subscribe(res => {
      this.loadData();
      this.dataGrid.instance.refresh();
    })
  }

}
