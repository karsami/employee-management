import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { forkJoin } from 'rxjs';
import { BaseGridComponent } from 'src/app/shared/components/base-grid.component';
import { ContractService } from 'src/app/shared/services/api/contract.service';
import { UserService } from 'src/app/shared/services/api/user.service';
import { TransferService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent extends BaseGridComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  contractTypes: any[] = [];
  users: any[] = [];

  constructor(private _contractService: ContractService, private _userService: UserService, public _transferService: TransferService) {
    super(_transferService);
    this.contractTypes = [
      {
        value: 1,
        text: 'Có thời hạn'
      },
      {
        value: 2,
        text: 'Không xác định thời hạn'
      }
    ];
    this.service = _contractService;
  }

  ngAfterViewInit(): void {
    this.baseDataGrid = this.dataGrid;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe)
  }

  ngOnInit(): void {
    this.loadData();
  }

  override loadData() {
    const contracts = this._contractService.getData();
    const users = this._userService.getData();
    const sub = forkJoin([contracts, users]).subscribe(res => {
      if (res[0] && res[0].Success) {
        this.dataSource = res[0].Data;
      }

      if (res[1] && res[1].Success) {
        this.users = res[1].Data;
      }
    })
    this.subscriptions.push(sub);
  }


}
