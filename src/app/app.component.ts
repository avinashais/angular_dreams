import { Component } from '@angular/core';
import { MenuService } from '../framework/services/menu.service';
import { initialMenuItems } from './app.menu';
import { AuthService } from '../auth/services/auth.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animal: string;
  name: string;
  constructor(menuService: MenuService, public auth: AuthService, public dialog: MatDialog) {
    menuService.items = initialMenuItems;
    this.auth.getLoginSubject().subscribe(() => {
      let dialogRef = this.dialog.open(LoginComponent, {
        width: '350px', height: '260px',
        data: { name: this.name, animal: this.animal }
      });
    });
  }
}
