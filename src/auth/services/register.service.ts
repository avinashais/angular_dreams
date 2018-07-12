import { Injectable } from "@angular/core";
import { RegisterModel } from "../interfaces/RegisterModel";
import { SmartHttpClient } from "../../shared/http-client/smart-httpclient.service";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";





const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};


@Injectable()
export class RegisterService {
    constructor(private httpClient: SmartHttpClient) {


    }
    public register(registerModel: RegisterModel): Observable<any> {

        return this.httpClient.Post<RegisterModel>('Account/RegisterSahakari', registerModel,httpOptions);

    }
}