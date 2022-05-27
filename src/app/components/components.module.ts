import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VisitedCountriesComponent } from './visited-countries/visited-countries.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CountryCardComponent,
    VisitedCountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    CountryCardComponent,
    VisitedCountriesComponent
  ]
})
export class ComponentsModule { }
