import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ServerResponse } from "../../entities/server-response";

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    controller: string = '';

    constructor(private http: HttpClient) {
    }

    getApiUrl() {
        return `${environment.host}/${environment.apiUrl}/${this.controller}`;
    }

    getData(): Observable<ServerResponse> {
        return this.http.get<ServerResponse>(this.getApiUrl());
    }

    insertData(param: any): Observable<ServerResponse> {
        return this.http.post<ServerResponse>(this.getApiUrl(), param);
    }

    updateData(param: any): Observable<ServerResponse> {
        return this.http.put<ServerResponse>(this.getApiUrl(), param);
    }

    deleteByID(id: any): Observable<ServerResponse> {
        return this.http.delete<ServerResponse>(`${this.getApiUrl()}/${id}`);
    }

    deleteMultiple(ids: any[]): Observable<ServerResponse> {
        return this.http.post<ServerResponse>(`${this.getApiUrl()}/delete-multiple`, ids)
    }
}