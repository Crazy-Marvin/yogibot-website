import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';

import { LegalDialog, AboutDialog } from '../../components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// This module is used to collect all material dependency.
// https://material.angular.io/guide/getting-started#step-3-import-the-component-modules
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  declarations: [
    LegalDialog,
    AboutDialog
  ],
  entryComponents: [
    LegalDialog,
    AboutDialog
  ]
})
export class CustomMaterialModule { }
