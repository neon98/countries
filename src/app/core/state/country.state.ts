import { Country } from "../models";

export interface CountryState {
    countries: Country[];
    isLoading: boolean;
    message: string;
    country: Country;
    visitedCountries: Set<string>;
}

export const initialState: CountryState = {
    countries: [],
    isLoading: false,
    message: '',
    country: {} as Country,
    visitedCountries: new Set()
}