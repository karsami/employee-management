import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { forkJoin } from 'rxjs';
import { BaseGridComponent } from 'src/app/shared/components/base-grid.component';
import { JobPositionService } from 'src/app/shared/services/api/job-position.service';
import { OrganizationUnitService } from 'src/app/shared/services/api/organization.service';
import { TransferService } from 'src/app/shared/services/transfer.service';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent extends BaseGridComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  dataSource: any[] = [];
  organizations: any[] = [];

  constructor(private _positionService: JobPositionService,
    private _organizationUnitService: OrganizationUnitService,
    public _transferService: TransferService) {
    super(_transferService);
    this.service = _positionService;
  }

  ngAfterViewInit(): void {
    this.baseDataGrid = this.dataGrid;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  ngOnInit(): void {
    this.loadData();
  }

  override loadData() {
    const positions = this._positionService.getData();
    const orgs = this._organizationUnitService.getData();
    const sub = forkJoin([positions, orgs]).subscribe(res => {
      if (res[0] && res[0].Success) {
        this.dataSource = res[0].Data;
      }

      if (res[1] && res[1].Success) {
        this.organizations = res[1].Data;
      }
      
    });
    this.subscriptions.push(sub);
  }

 

}
