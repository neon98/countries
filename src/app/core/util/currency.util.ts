import { Country } from "../models";

export class CurrencyUtil {
    
    public static getCurrencies(country: Country): string {
        let currencyString = '';
        if(!!country && !!country.currencies){
            let currencies: string[] = [];
            Object.keys(country.currencies).forEach(key => currencies.push(country.currencies[key].name))
            currencyString = currencies.length > 0 ? currencies.join(", ") : '';
        }
        return currencyString;
    }

    public static getLanguages(country: Country): string {
        let languageString = '';
        if(!!country && !!country.languages){
            let languages: string[] = [];
            Object.keys(country.languages).forEach(key => languages.push(country.languages[key]))
            languageString = languages.length > 0 ? languages.join(", ") : '';
        }
        return languageString;
    }
}