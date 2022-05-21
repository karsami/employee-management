import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/app/shared/services/api/role.service';
import { TransferDataService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {
  
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  selectedItemKeys: any[] = [];
  subsriptions: Subscription[] = [];

  constructor(private roleService: RoleService, private transferDataService: TransferDataService) { }

  ngOnDestroy(): void {
    this.subsriptions.forEach(res => res.unsubscribe());
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.roleService.getData().subscribe(res => {
      if (res && res.Success) {
        this.dataSource = res.Data;
      }
    });
  }

  onInserting(event: RowInsertingEvent) {
    const role = Object.assign(event.data, { PermissionDetail: 'View;Modified' });
    const sub = this.roleService.insertData(role).subscribe(res => {
      if (res) {
        this.loadData();
        this.transferDataService.handleShowToast('success', 'Thêm vai trò thành công');
      } else {
        this.transferDataService.handleShowToast('error', 'Thêm vai trò thất bại');
      }
    });
    this.subsriptions.push(sub)
  }

  onUpdating(event: RowUpdatingEvent) {
    const data = Object.assign(event.oldData, event.newData);
    const sub = this.roleService.updateData(data).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
        this.transferDataService.handleShowToast('success', 'Cập nhật vai trò thành công');
      } else {
        this.transferDataService.handleShowToast('error', 'Cập nhật vai trò thất bại');
      }
    });
    this.subsriptions.push(sub)
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  deleteRecords() {
    const sub = this.roleService.deleteMultiple(this.selectedItemKeys).subscribe(res => {
      if (res && res.Success) {
        this.loadData();
        this.dataGrid.instance.refresh();
        this.transferDataService.handleShowToast('success', 'Xoá vai trò thành công')
      }
    });
    this.subsriptions.push(sub);
  }
}
