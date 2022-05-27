import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectVisitedCountries } from 'src/app/core/state';

@Component({
  selector: 'app-visited-countries',
  templateUrl: './visited-countries.component.html',
  styleUrls: ['./visited-countries.component.scss']
})
export class VisitedCountriesComponent implements OnInit {

  visitedCountries: string[] = [];
  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.pipe(select(selectVisitedCountries)).subscribe(visitedCountries => {
      this.visitedCountries = [...visitedCountries];
    })
  }

}
