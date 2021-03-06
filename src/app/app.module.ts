// Imports base Angular settings (browser module, ng module, routing module, forms module)

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Imports NgBootstrap and FontAwesome

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome'; 

// Imports generated modules

import { AppComponent } from './app.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbdDropdownBasic } from './dropdown/dropdown.component';

// Imports Angular Material and Animations modules

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NgbdCarouselBasic, // Slide Template Component
    NavbarComponent, // Navbar
    NgbdDropdownBasic // Dropdown menu in navbar
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
