import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbdDropdownBasic } from './dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FacebookIconComponent } from './facebook-icon/facebook-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasic, // Slide Template Component
    NavbarComponent, // Navbar
    NgbdDropdownBasic, FacebookIconComponent // Dropdown menu in navbar
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule, // Font Awesome
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, NgbdCarouselBasic]
})
export class AppModule { }
