import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Theme } from './core/models/theme.enum';
import { ThemeService } from './core/services/theme.service';
import { selectIsLoading } from './core/state';
import { GetCountries } from './core/state/country.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countries';
  theme: Theme = Theme.dark;
  isLoading = false;

  constructor(private themeService: ThemeService, private _store: Store){}

  ngOnInit(): void {
    this._store.dispatch(new GetCountries());
    this.themeService.mode$.subscribe(theme => {
      this.theme = theme;
    });
    this._store.pipe(select(selectIsLoading)).subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
