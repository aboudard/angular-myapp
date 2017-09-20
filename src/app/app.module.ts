import { LoggedInGuard } from './shared/login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DataService } from './shared/data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './shared/heroes.service';
import { HeroFormComponent } from './heroes/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    HeroesComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService, UserService, LoggedInGuard, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }