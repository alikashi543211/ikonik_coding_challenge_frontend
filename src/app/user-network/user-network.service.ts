import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserNetworkService {

    private _baseUrl = "http://127.0.0.1:8000/api/"
    constructor(private _httpClient: HttpClient, private _router:Router) { }

    suggestionList() {
        return this._httpClient.get<any>(this._baseUrl + 'user/connection_request/suggestionList',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    sentRequestList() {
        return this._httpClient.get<any>(this._baseUrl + 'user/connection_request/sentRequestList',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    receivedRequestList() {
        return this._httpClient.get<any>(this._baseUrl + 'user/connection_request/receivedRequestList',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    connectionList() {
        return this._httpClient.get<any>(this._baseUrl + 'user/connection_request/connectionList',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/events']);
    }

    getLoggedInUser() {
        return this._httpClient.post<any>(this._baseUrl + 'user/auth/detail', '',
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }
}
