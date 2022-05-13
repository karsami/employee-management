import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class OrganizationUnitService extends BaseService {
    constructor(http: HttpClient) {
        super(http);
        this.controller = 'OrganizationUnit'
    }

}