import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome'; // Imports angular-font-awesome 


import { AppComponent } from './app.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbdDropdownBasic } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasic, // Slide Template Component
    NavbarComponent, // Navbar
    NgbdDropdownBasic // Dropdown menu in navbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
