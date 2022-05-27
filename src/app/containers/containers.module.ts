import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { ComponentsModule } from '../components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbDropdownModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    CountryDetailComponent
  ]
})
export class ContainersModule { }
