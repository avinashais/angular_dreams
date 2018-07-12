import { Component } from "@angular/core";
import { NavigationService } from "../services/navigation.service";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "../../auth/login/login.component";


@Component({
    selector: 'fw-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    animal: string;
    name: string;

    constructor(private navigation: NavigationService, public dialog: MatDialog) {

    }

    toggleDrawer(): void {
        this.navigation.setNavigationbarState();
    }

    openDialog(): void {

        let dialogRef = this.dialog.open(LoginComponent, {
            width: '350px', height: '260px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }


}