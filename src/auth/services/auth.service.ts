import { Injectable } from "@angular/core";
import { LoginModel } from "../interfaces/LoginModel";
import { SmartHttpClient } from "../../shared/http-client/smart-httpclient.service";
import { Observable, Subject } from "rxjs";
import { HttpHeaders, } from "@angular/common/http";


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};


@Injectable()
export class AuthService {
    private loader$ = new Subject<null>();
    constructor(private http: SmartHttpClient) {
    }


    isAuthenticated(): boolean {
        return false;
    }

    authenticate(loginModel: LoginModel): Observable<any> {

        return this.http.Post<LoginModel>('Account/Login', loginModel, httpOptions);
    }

   getLoginSubject(): Observable<null> {
        return this.loader$.asObservable();
    }


    showLogin() {
        return this.loader$.next();
    }


} 