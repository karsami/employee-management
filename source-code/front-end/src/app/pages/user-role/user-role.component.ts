import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { Subscription } from 'rxjs';
import { UserRoleService } from 'src/app/shared/services/api/user-role.service';
import { TransferDataService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit, OnDestroy {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  selectedItemKeys: any[] = [];
  subsriptions: Subscription[] = [];

  constructor(private userRoleService: UserRoleService, private transferDataService: TransferDataService) { }

  ngOnDestroy(): void {
    this.subsriptions.forEach(res => res.unsubscribe());
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userRoleService.getData().subscribe(res => {
      if (res && res.Success) {
        this.dataSource = res.Data;
      }
    });
  }

  onInserting(event: RowInsertingEvent) {
    const sub = this.userRoleService.insertData(event.data).subscribe(res => {
      if (res) {
        this.loadData();
        this.transferDataService.handleShowToast('success', 'Thêm người dùng thành công');
      } else {
        this.transferDataService.handleShowToast('error', 'Thêm người dùng thất bại');
      }
    });
    this.subsriptions.push(sub)
  }

  onUpdating(event: RowUpdatingEvent) {
    const data = Object.assign(event.oldData, event.newData);
    const sub = this.userRoleService.updateData(data).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
        this.transferDataService.handleShowToast('success', 'Cập nhật người dùng thành công');
      } else {
        this.transferDataService.handleShowToast('error', 'Cập nhật người dùng thất bại');
      }
    });
    this.subsriptions.push(sub)
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  deleteRecords() {
    const sub = this.userRoleService.deleteMultiple(this.selectedItemKeys).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
        this.dataGrid.instance.refresh();
        this.transferDataService.handleShowToast('success', 'Xoá người dùng thành công');
      }
    });
    this.subsriptions.push(sub);
  }
}
