import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _baseUrl = "http://127.0.0.1:8000/api/"
    constructor(private _httpClient: HttpClient, private _router:Router) { }

    registerUser(user) {
        return this._httpClient.post<any>(this._baseUrl + 'auth/register', user);
    }

    loginUser(user) {
        return this._httpClient.post<any>(this._baseUrl + 'auth/login', user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
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
