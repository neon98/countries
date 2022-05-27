import { CountryName } from "./countryName";
import { Currency } from "./currency";
import { Flags } from "./flags";
import { Language } from "./language";
import { RegionalBloc } from "./regionalBloc";
import { Translations } from "./translations";

export interface Country {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: string[];
    area: number;
    borders: string[];
    callingCodes: string[];
    capital: string;
    cioc: string;
    currencies: {
        [key:string]: Currency
    };
    demonym: string;
    flag: string;
    flags: Flags;
    gini: number;
    languages: {
        [key: string]: string
    };
    latlng: number[];
    name: CountryName;
    nativeName: string;
    numericCode: string;
    population: number;
    region: string;
    regionalBlocs: RegionalBloc[];
    subregion: string;
    topLevelDomain: string[];
    timezones: string[];
    translations: Translations;
}