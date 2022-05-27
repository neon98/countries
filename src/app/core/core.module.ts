import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFilterPipe } from './pipes/countryFilter.pipe';
import { CountryService } from './services/country.service';
import { CurrencyUtil } from './util/currency.util';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [
    CountryFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryFilterPipe
  ],
  providers: [CountryService, ThemeService]
})
export class CoreModule { }
