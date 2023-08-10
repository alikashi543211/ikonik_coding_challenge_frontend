import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserNetworkService {

    private _baseUrl = "http://127.0.0.1:8000/api/";
    suggestionCount = 0;
    sentRequestCount = 0;
    receivedRequestCount = 0;
    connectionListCount = 0;

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

    sendConnection(data) {
        return this._httpClient.post<any>(this._baseUrl + 'user/connection_request/sendConnection', data,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    withdrawSentRequest(data) {
        return this._httpClient.post<any>(this._baseUrl + 'user/connection_request/withdrawSentRequest', data,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    removeConnection(data) {
        return this._httpClient.post<any>(this._baseUrl + 'user/connection_request/removeConnection', data,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    acceptConnection(data) {
        return this._httpClient.post<any>(this._baseUrl + 'user/connection_request/acceptConnection', data,
        {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())});
    }

    resetCounters() {
        this.suggestionList().subscribe(res => {
            this.suggestionCount = res.data.length;
        });

        this.sentRequestList().subscribe(res => {
            this.sentRequestCount = res.data.length;
        });

        this.receivedRequestList().subscribe(res => {
            this.receivedRequestCount = res.data.length;
        });

        this.connectionList().subscribe(res => {
            this.connectionListCount = res.data.length;
        });
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
