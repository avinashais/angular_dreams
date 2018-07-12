import { Component, ViewChild,  AfterContentInit } from "@angular/core";
import { MatDrawer } from "@angular/material";
import { NavigationService } from "../services/navigation.service";
 

@Component({
    selector: 'fw-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent    implements AfterContentInit  {
    @ViewChild('drawer') sidenav: MatDrawer;
   
    constructor(private navigation: NavigationService) {
       
        this.navigation.getNavigationbarState().subscribe(()=> {
            this.sidenav.toggle();
          });
    }

    ngAfterContentInit() {
      
        this.sidenav.openedStart.subscribe(() => {
            console.log('Open started!');
        });
        this.sidenav.closedStart.subscribe(() => {
            console.log('Close started!');
        });
    }
}