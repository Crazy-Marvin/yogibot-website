import { OpaqueToken } from '@angular/core';

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

export const COUNTRIES_DATA = new OpaqueToken('CountriesData');
export const LANGUAGES_DATA = new OpaqueToken('LanguagesData');
export const ANTHEMS_DATA = new OpaqueToken('AnthemsData');
