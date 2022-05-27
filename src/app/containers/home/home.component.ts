import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Country } from 'src/app/core/models';
import { selectCountries } from 'src/app/core/state';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  countrySearchText: string = '';

  regions = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  selectedRegion = "Filter by Region";

  searchIcon = faSearch;
  
  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.pipe(select(selectCountries)).subscribe(countries => {
      this.countries = countries;
    })
  }

  dropdownSelect(id: number) {
    this.selectedRegion = this.regions[id];
  }

  hasSameRegion(country: Country) {
    if(this.selectedRegion === this.regions[0]) {
      return true;
    } else if(country.region === this.selectedRegion){
      return true;
    }
    return false;
  }
}
