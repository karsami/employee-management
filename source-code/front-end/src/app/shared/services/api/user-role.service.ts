import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base-api.service";

@Injectable({
    providedIn: 'root'
})
export class UserRoleService extends BaseService {
    constructor(http: HttpClient) {
        super(http);
        this.controller = 'UserRole'
    }

}