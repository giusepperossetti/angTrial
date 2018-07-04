import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap'; // Autocomplete search
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const videogames = ["Assassin's creed", "Assassin's creed 2", "Assassin's creed: Brotherhood", "Assassin's creed: Revelations", "Assassin's creed 3", "Assassin's creed IV: Black Flag", "Assassin's creed: Unity",
  "Assassin's creed: Syndicate", "Assassin's creed: Origins", "Assassin's creed: Olympus", 'Final Fantasy', 'Call Of Duty', 'Kingdom Hearts',
  'Kingdom Hearts 2', 'Kingdom Hearts 3', 'Silent Hill', 'Metro', 'The Sims', 'Farcry', 'Grand Theft Auto', 'Outlast', 'The Last Of Us', 'FIFA 19',
  'NBA 2K19'];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class NavbarComponent implements OnInit {

  constructor(config: NgbTypeaheadConfig) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : videogames.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
  );

  ngOnInit() {
  }

}
