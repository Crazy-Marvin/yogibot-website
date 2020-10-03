import { InjectionToken } from '@angular/core';

export {
  Countries,
  ICountry,
  Anthems,
  IAnthem,
  Languages,
  ILanguage,
  CountriesData,
  AnthemsData,
  LanguagesData
} from 'countries-data';

export const COUNTRIES_DATA = new InjectionToken('CountriesData');
export const LANGUAGES_DATA = new InjectionToken('LanguagesData');
export const ANTHEMS_DATA = new InjectionToken('AnthemsData');
