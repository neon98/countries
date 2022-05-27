import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, of, switchMap, map, Observable, first } from "rxjs";
import { Country } from "../models";
import { CountryService } from "../services/country.service";
import { CountryActionTypes, GetCountriesFailure, GetCountriesSuccess, GetCountry, GetCountryFailure, GetCountrySuccess } from "./country.actions";

@Injectable({
    providedIn: 'root',
})
export class CountryEffects {

    constructor(
        private actions$: Actions<any>, 
        private countryService: CountryService
    ) {}

    fetchCountries$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CountryActionTypes.GetCountries),
            switchMap(() =>
                this.countryService.getCountries().pipe(
                    map((countries: Country[]) => new GetCountriesSuccess(countries)),
                    catchError((error) => of(new GetCountriesFailure(error)))
                )
            )
        )
    )

    fetchCountry$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CountryActionTypes.GetCountry),
            switchMap((action: GetCountry) =>
                this.countryService.getCountryByName(action.payload).pipe(
                    map((countries: Country[]) => new GetCountrySuccess(countries.length ? countries[0] : {} as Country)),
                    catchError((error) => of(new GetCountryFailure(error)))
                )
            )
        )
    )
}