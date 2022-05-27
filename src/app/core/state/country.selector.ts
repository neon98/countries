import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountryState } from "./country.state";

export const selectCountryState = createFeatureSelector<CountryState>("country");

export const selectCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.countries
)

export const selectCountry = createSelector(
    selectCountryState,
    (state: CountryState) => state.country
)

export const selectVisitedCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.visitedCountries
)

export const selectIsLoading = createSelector(
    selectCountryState,
    (state: CountryState) => state.isLoading
)