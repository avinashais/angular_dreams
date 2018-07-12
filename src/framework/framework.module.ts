import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FrameworkBodyComponent } from "./framework-body/framework-body.component";
import { MaterialModule } from "../material/material.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { NavigationService } from "./services/navigation.service";
import { MenuComponent } from "./menus/menu/menu.component";
import { MenuItemComponent } from "./menus/menu-item/menu-item.component";
import { MenuService } from "./services/menu.service";
import { AuthModule } from "../auth/auth.module";
import { LoaderComponent } from "./loader/loader.component";
@NgModule({
    declarations: [HeaderComponent, FooterComponent, ContentComponent,
        FrameworkBodyComponent, MenuComponent, MenuItemComponent, LoaderComponent],
    imports: [FlexLayoutModule, MaterialModule, RouterModule, FormsModule, AuthModule],
    exports: [FrameworkBodyComponent],
    providers: [NavigationService, MenuService],




})
export class FwModule {


}
