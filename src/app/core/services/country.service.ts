import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from "../models";

@Injectable({
    providedIn: 'root',
})
export class CountryService {
    private api = 'https://restcountries.com/v3.1';
    
    constructor(private http: HttpClient){}

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.api}/all`);
    }

    getCountryByName(name: string) {
        return this.http.get<Country[]>(`${this.api}/name/${name}`, {
            params: {
                "fullText": true
            }
        });
    }

    getCountriesByCode(codes: string[]): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.api}/alpha?codes=${codes.join(',')}`)
    }
}