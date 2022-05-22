import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { RowInsertingEvent, RowUpdatingEvent } from 'devextreme/ui/data_grid';
import { Subscription } from 'rxjs';
import { BaseGridComponent } from 'src/app/shared/components/base-grid.component';
import { RoleService } from 'src/app/shared/services/api/role.service';
import { TransferService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent extends BaseGridComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  subsriptions: Subscription[] = [];

  constructor(private _roleService: RoleService, private transferService: TransferService) {
    super(transferService);
    this.service = _roleService;
  }

  ngAfterViewInit(): void {
    this.baseDataGrid = this.dataGrid;
  }

  ngOnDestroy(): void {
    this.subsriptions.forEach(res => res.unsubscribe());
  }

  ngOnInit(): void {
    this.loadData();
  }

  override loadData() {
    this._roleService.getData().subscribe(res => {
      if (res && res.Success) {
        this.dataSource = res.Data;
      }
    });
  }
}
