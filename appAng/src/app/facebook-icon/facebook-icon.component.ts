import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'facebook-icon',
  templateUrl: './facebook-icon.component.html'
})
export class FacebookIconComponent {
  faCoffee = faCoffee;
}
