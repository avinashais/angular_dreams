import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "../material/material.module";
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./register/register.component";
import { RegisterService } from "./services/register.service";

@NgModule({
    imports: [ ReactiveFormsModule, MaterialModule],
    declarations: [LoginComponent,RegisterComponent],
    entryComponents: [LoginComponent],
    providers: [AuthService,RegisterService]
    
})
export class AuthModule {

}