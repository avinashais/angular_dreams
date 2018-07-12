import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FwModule} from '../framework/framework.module'
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { FeatureModule } from '../feature-modules/feature.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FwModule,
    FeatureModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
