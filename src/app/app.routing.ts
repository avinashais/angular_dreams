import { Routes } from "@angular/router";
import { DashboardComponent } from "../feature-modules/dashboard/dashboard.component";
import { AuthGuardService as AuthGuard } from "../shared/services/auth-guard.service";
import { RegisterComponent } from "../auth/register/register.component";
import { CustomerComponent } from "../feature-modules/customer/customer.component";

export const appRoutes :Routes = [
    {path:'customer',component : CustomerComponent },
    {path:'register',component : RegisterComponent },
{path:'dashboard',component : DashboardComponent,canActivate: [AuthGuard] },
{path:'', component : DashboardComponent},
{path:'**',component : DashboardComponent}
];



 