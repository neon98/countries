import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/core/models';
import { AddVisitedCountry } from 'src/app/core/state';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {

  @Input() country: Country = {} as Country;
  constructor(private _store: Store, private router: Router) { }

  open(){
    this._store.dispatch(new AddVisitedCountry(this.country.name.common));
    this.router.navigate([`/${this.country.name.common}`])
  }
}
