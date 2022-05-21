import { Component } from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { RowInsertingEvent, RowRemovingEvent, RowUpdatingEvent } from "devextreme/ui/data_grid";
import { Subscription } from "rxjs";
import { ServerResponse } from "../entities/server-response";
import { TransferService } from "../services/transfer.service";


export class BaseGridComponent {

    baseDataGrid!: DxDataGridComponent;
    service: any;
    selectedItemKeys: any[] = [];
    subscriptions: Subscription[] = [];

    constructor(private transferDataService: TransferService) {

    }


    loadData() {
        //override
    }

    selectionChanged(data: any) {
        this.selectedItemKeys = data.selectedRowKeys;
    }

    onInserting(event: RowInsertingEvent) {
        const sub = this.service.insertData(event.data).subscribe((res: ServerResponse) => {
            this.handleServerResponse(res, event);
        })
        this.subscriptions.push(sub);
    }


    onUpdating(event: RowUpdatingEvent) {
        const param = Object.assign(event.oldData, event.newData);
        const sub = this.service.updateData(param).subscribe((res: ServerResponse) => {
            this.handleServerResponse(res, event);
        })
        this.subscriptions.push(sub);
    }

    onRemoving(event: RowRemovingEvent) {
        const sub = this.service.deleteByID(event.key).subscribe((res: ServerResponse) => {
            this.handleServerResponse(res, event);
        })
    }


    deleteRecords() {
        const sub = this.service.deleteMultiple(this.selectedItemKeys).subscribe((res: ServerResponse) => {
            this.handleServerResponse(res);
        });
        this.subscriptions.push(sub);
    }

    handleServerResponse(res: ServerResponse, event: any = null) {
        if (res && res.Success) {
            this.loadData();
            this.baseDataGrid.instance.refresh();
            this.transferDataService.handleShowToast('success', res.UserMessage);
        } else {
            if (event) {
                event.cancel = true;
            }
            this.transferDataService.handleShowToast('error', res.UserMessage);
        }
    }
}