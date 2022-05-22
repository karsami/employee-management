import { Component, OnDestroy, OnInit } from '@angular/core';
import { RowInsertingEvent, RowRemovingEvent, RowUpdatingEvent } from 'devextreme/ui/tree_list';
import { Subscription } from 'rxjs';
import { ServerResponse } from 'src/app/shared/entities/server-response';
import { OrganizationUnitService } from 'src/app/shared/services/api/organization.service';
import { TransferService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit, OnDestroy {

  dataSource: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(private _organizationUnitService: OrganizationUnitService, private _transferService: TransferService) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const sub = this._organizationUnitService.getData().subscribe(res => {
      if (res && res.Success) {
        this.dataSource = res.Data;
      }
    })
    this.subscriptions.push(sub);
  }

  onInserting(event: RowInsertingEvent) {
    const sub = this._organizationUnitService.insertData(event.data).subscribe(res => {
      this.handleServerResponse(res, event);
    });
    this.subscriptions.push(sub);
  }

  onUpdating(event: RowUpdatingEvent) {
    const data = Object.assign(event.oldData, event.newData);
    const sub = this._organizationUnitService.updateData(data).subscribe(res => {
      this.handleServerResponse(res, event);
    });
    this.subscriptions.push(sub);
  }

  onDeleting(event: RowRemovingEvent) {
    const sub = this._organizationUnitService.deleteByID(event.key).subscribe(res => {
      if (this.handleServerResponse(res, event)) {
        this.deleteOrgChildren(event.key);
      };
    });
    this.subscriptions.push(sub);
  }

  deleteOrgChildren(parentID: any) {
    if (parentID) {
      const childIDs = this.dataSource.filter(org => org.ParentID == parentID).map(item => item.OrganizationUnitID);
      const sub = this._organizationUnitService.deleteMultiple(childIDs).subscribe(res => {
        this.handleServerResponse(res);
      });
      this.subscriptions.push(sub);
    }
  }

  handleServerResponse(res: ServerResponse, event: any = null): boolean {
    if (res && res.Success) {
      this.loadData();
      this._transferService.handleShowToast('success', res.UserMessage);
      return true;
    } else {
      if (event) {
        event.cancel = true;
      }
      this._transferService.handleShowToast('error', res.UserMessage);
      return false;
    }
  }

}
