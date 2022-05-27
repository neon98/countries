import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { reducer } from './core/state';
import { CountryEffects } from './core/state/country.effects';
import { ContainersModule } from './containers/containers.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,

    // Ngrx
    StoreModule.forRoot({country: reducer}),
    EffectsModule.forRoot([CountryEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),

    ComponentsModule,
    ContainersModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
