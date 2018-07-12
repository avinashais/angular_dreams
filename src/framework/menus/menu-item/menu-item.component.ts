import { Component, Input, ViewChild } from "@angular/core";
import { MenuItem } from "../../services/menu.service";
import { ViewEncapsulation } from "@angular/core";

@Component({

    selector:'fw-menu-item',
    templateUrl:'./menu-item.component.html',
    styleUrls :['menu-item.component.css'],
   // encapsulation: ViewEncapsulation.None

})
export class MenuItemComponent{

    @Input() items: MenuItem[];
    @ViewChild('childMenu') public childMenu;
    constructor()
    {

    }
}