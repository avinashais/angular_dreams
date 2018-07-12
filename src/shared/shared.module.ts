import { NgModule } from "@angular/core";
import { SmartHttpClient, applicationHttpClientCreator } from "./http-client/smart-httpclient.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoaderService } from "../framework/services/loader.service";
import { UISercice } from "./UIService/ui.service";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [LoaderService,
        {
            provide: SmartHttpClient,
            useFactory: applicationHttpClientCreator,
            deps: [HttpClient, LoaderService]
        },
        UISercice, AuthGuardService
    ],

})
export class SharedModule {

}