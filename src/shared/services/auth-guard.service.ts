import { Injectable } from "@angular/core";
import { AuthService } from "../../auth/services/auth.service";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.auth.showLogin();
      return false;
    }
    return true;
  }
}
