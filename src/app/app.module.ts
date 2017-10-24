import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';
import { Router }                   from '@angular/router';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import * as $ from 'jquery';

import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './app-routing.module';

import { AuthGuard }                from './login/guard/auth.guard.service';
import { AuthService }              from './login/guard/auth.service';

import { HeroesModule }             from './heroes/heroes.module';
import { ComposeMessageComponent }  from './compose-message.component';
import { PageNotFoundComponent }    from './not-found.component';

import { DialogService }            from './dialog.service';

import { GlobalConstant }           from './helper/globalConstant';
import { TokenService }             from './service/token/token.service';
import { HelperService }            from './service/helper/helper.service';
import { RoomService }              from './service/intercept/room/room.service';
import { TreatmentService }         from './service/intercept/treatment/treatment.service';
import { MaintenanceService }       from './service/intercept/maintenance/maintenance.service';
import { ApotekerService }          from './service/intercept/apoteker/apoteker.service';
import { FunctionalityService }     from './service/intercept/functionality/functionality.service';
import { PatientService }           from './service/intercept/patient/patient.service';
import { UserService }              from './service/intercept/user/user.service';
import { AssetService }             from './service/intercept/asset/asset.service';
import { globalIntercept }          from './service/intercept/globalIntercept';

//Login
import { LoginRoutingModule }       from './login/login.routing';
import { LoginComponent }           from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    GlobalConstant, 
    DialogService, 
    AuthGuard,
    AuthService,
    TokenService,
    HelperService,
    RoomService,
    TreatmentService,
    MaintenanceService,
    ApotekerService,
    FunctionalityService,
    PatientService,
    UserService,
    AssetService,
    globalIntercept
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
