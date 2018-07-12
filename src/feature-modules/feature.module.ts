import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../material/material.module";
import { CustomerComponent } from "./customer/customer.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        CustomerComponent,
        DashboardComponent],
        imports:[FlexLayoutModule,MaterialModule,ReactiveFormsModule],
        exports:[DashboardComponent],
    
   

})
export class FeatureModule{

}