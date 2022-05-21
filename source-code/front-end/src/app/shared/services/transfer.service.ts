import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TransferDataService {

    @Output() showToast = new EventEmitter<any>();
    handleShowToast(type: string, message: string) {
        const data = {
            Type: type,
            Message: message
        };

        this.showToast.emit(data);
    }
}