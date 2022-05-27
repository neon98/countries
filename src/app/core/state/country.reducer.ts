import { Action } from "@ngrx/store";
import { Country } from "../models";
import { CountryActions, CountryActionTypes } from "./country.actions";
import { CountryState, initialState } from "./country.state";

export function reducer(state = initialState, action: any): CountryState {
  switch(action.type) {
    case CountryActionTypes.GetCountries:
      return {
        ...state,
        isLoading: true
      };

    case CountryActionTypes.GetCountriesSuccess:
      return {
        ...state, 
        countries: action.payload,
        isLoading: false,
        message: 'Countries fetched successfully!'
      }

    case CountryActionTypes.GetCountriesFailure:
      return {
        ...state,
        countries: [],
        isLoading: false,
        message: 'Something went wrong!'
      }

    case CountryActionTypes.GetCountry:
      return {
        ...state,
        isLoading: true
      };

    case CountryActionTypes.GetCountrySuccess:
      return {
        ...state, 
        country: action.payload,
        isLoading: false,
        message: 'Country fetched successfully!'
      }

    case CountryActionTypes.GetCountryFailure:
      return {
        ...state,
        country: {} as Country,
        isLoading: false,
        message: 'Something went wrong!'
      }

    case CountryActionTypes.ClearCountry:
      return {
        ...state,
        country: {} as Country,
        isLoading: false,
        message: 'Country data cleared successfully!'
      }

    case CountryActionTypes.AddVisitedCountry:
      return {
        ...state, 
        visitedCountries: state.visitedCountries.add(action.payload),
        message: 'Visited country added successfully!'
      }


    case CountryActionTypes.ClearVisitedCountries:
      return {
        ...state,
        visitedCountries: new Set(),
        message: 'Visited countries cleared successfully!'
      }
      
    default:
      return state;
  }
}