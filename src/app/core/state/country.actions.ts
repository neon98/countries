import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Country } from "../models";

export enum CountryActionTypes {
    GetCountries = '[Countries API] Get Countries',
    GetCountriesSuccess = '[Countries API] Get Countries Success',
    GetCountriesFailure = '[Countries API] Get Countries Failure',

    GetCountry = '[Countries API] Get Country',
    GetCountrySuccess = '[Countries API] Get Country Success',
    GetCountryFailure = '[Countries API] Get Country Failure',
    ClearCountry = "[APP] Clear Country",

    AddVisitedCountry = '[APP] Add Visited Country',
    ClearVisitedCountries = '[APP] Clear Visited Countries'
}

export class GetCountries implements Action {
    public readonly type = CountryActionTypes.GetCountries;
}

export class GetCountriesSuccess implements Action {
    public readonly type = CountryActionTypes.GetCountriesSuccess;
    constructor(public payload: Country[]){}
}

export class GetCountriesFailure implements Action {
    public readonly type = CountryActionTypes.GetCountriesFailure;
    constructor(public error: HttpErrorResponse){}
}


export class GetCountry implements Action {
    public readonly type = CountryActionTypes.GetCountry;
    constructor(public payload: string = ''){}
}

export class GetCountrySuccess implements Action {
    public readonly type = CountryActionTypes.GetCountrySuccess;
    constructor(public payload: Country){}
}

export class GetCountryFailure implements Action {
    public readonly type = CountryActionTypes.GetCountryFailure;
    constructor(public error: HttpErrorResponse){}
}

export class ClearCountry implements Action {
    public readonly type = CountryActionTypes.ClearCountry;
}


export class AddVisitedCountry implements Action {
    public readonly type = CountryActionTypes.AddVisitedCountry;
    constructor(public payload: string = ''){}
}

export class ClearVisitedCountries implements Action {
    public readonly type = CountryActionTypes.ClearVisitedCountries;
}

export type CountryActions = GetCountries 
    | GetCountriesSuccess 
    | GetCountriesFailure 
    | GetCountry 
    | GetCountriesSuccess 
    | GetCountriesFailure 
    | ClearCountry
    | AddVisitedCountry
    | ClearVisitedCountries;