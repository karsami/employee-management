import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { forkJoin } from 'rxjs';
import { BaseGridComponent } from 'src/app/shared/components/base-grid.component';
import { OrganizationUnitService } from 'src/app/shared/services/api/organization.service';
import { RoleService } from 'src/app/shared/services/api/role.service';
import { UserRoleService } from 'src/app/shared/services/api/user-role.service';
import { UserService } from 'src/app/shared/services/api/user.service';
import { TransferService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent extends BaseGridComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  roles: any[] = [];
  users: any[] = [];
  organizationUnits: any[] = [];
  listStatus: any[] = [];

  constructor(private _userRoleService: UserRoleService,
    private _roleService: RoleService,
    private _userService: UserService,
    private _organizationUnitService: OrganizationUnitService,
    public transferService: TransferService) {
    super(transferService);
    this.service = _userRoleService;
    this.listStatus = [
      {
        value: 1,
        text: 'Đang hoạt động'
      },
      {
        value: 2,
        text: 'Chờ xác nhận'
      },
      {
        value: 3,
        text: 'Ngừng hoạt động'
      },
    ];
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
    const userRoles = this._userRoleService.getData();
    const roles = this._roleService.getData();
    const users = this._userService.getData();
    const organizationUnits = this._organizationUnitService.getData();
    const sub = forkJoin([userRoles, roles, users, organizationUnits]).subscribe(res => {
      if (res[0] && res[0].Success) {
        this.dataSource = res[0].Data;
      }

      if (res[1] && res[1].Success) {
        this.roles = res[1].Data;
      }

      if (res[2] && res[2].Success) {
        this.users = res[2].Data;
      }

      if (res[3] && res[3].Success) {
        this.organizationUnits = res[3].Data;
      }
      
    });
    this.subscriptions.push(sub);
  }

}
