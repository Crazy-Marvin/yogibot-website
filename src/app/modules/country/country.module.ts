import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CountriesData,
  AnthemsData,
  LanguagesData,
  COUNTRIES_DATA,
  LANGUAGES_DATA,
  ANTHEMS_DATA
} from './models';

const providers = [
  { provide: COUNTRIES_DATA, useValue: CountriesData },
  { provide: LANGUAGES_DATA, useValue: LanguagesData },
  { provide: ANTHEMS_DATA, useValue: AnthemsData }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ...providers
  ]
})
export class CountryModule { }
