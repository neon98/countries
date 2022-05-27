import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Country } from 'src/app/core/models';
import { CountryService } from 'src/app/core/services/country.service';
import { AddVisitedCountry, ClearCountry, GetCountry, selectCountry } from 'src/app/core/state';
import { CurrencyUtil } from 'src/app/core/util/currency.util';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit, OnDestroy {

  country: Country = {} as Country;
  paramsSubscription: Subscription | undefined;

  borderCountries: Country[] = [];

  getCurrencies = CurrencyUtil.getCurrencies;
  getLanguages = CurrencyUtil.getLanguages;
  backIcon = faChevronLeft;

  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store, 
    private activatedRoute: ActivatedRoute, 
    private _countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params) => {
        this._store.dispatch(new GetCountry(params['country']))
      });
    this._store.pipe(takeUntil(this.unsubscribe$), select(selectCountry)).subscribe(country => {
      this.country = country;
      this._countryService.getCountriesByCode(country.borders).subscribe(borderCountries => this.borderCountries = borderCountries);
    })
  }

  ngOnDestroy(): void {
    this.borderCountries= [];
    this._store.dispatch(new ClearCountry());
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  open(borderCountry: Country){
    this._store.dispatch(new AddVisitedCountry(borderCountry.name.common));
    this.router.navigate([`/${borderCountry.name.common}`])
  }

}
