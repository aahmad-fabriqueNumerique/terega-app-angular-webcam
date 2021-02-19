import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';

import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ConditionsComponent } from './conditions/conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    NavbarComponent,
    InstructionsComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
