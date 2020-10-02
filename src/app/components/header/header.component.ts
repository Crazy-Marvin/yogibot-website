import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { SayingService, Language } from '../../services/saying.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  languages: string[];
  filterLangs: string[];
  selection: Language;

  constructor(public dialog: MatDialog, private sayingService: SayingService) {
    this.languages = sayingService.getSupportLanguages();
    this.selection = sayingService.currentLanguage;
  }

  onSelectionChange(name: string) {
    console.log(name);
    if (name) {
      const filterValue = name.toLowerCase();
      this.filterLangs = this.languages.filter(lang => lang.toLowerCase().startsWith(filterValue));
    } else {
      this.filterLangs = this.languages;
    }
    this.sayingService.onSelectionChange();
  }

  filterLanguages(val: string) {
    return val ?
      this.languages.filter(lang => lang.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.languages;
  }

  ngOnInit() {
  }

  openLegalDialog() {
    this.dialog.open(LegalDialog);
  }

  openAboutDialog() {
    this.dialog.open(AboutDialog);
  }

  generate() {
    this.sayingService.generateNewSaying();
  }

}

@Component({
  selector: 'legal-dialog',
  templateUrl: './legal-dialog.html'
})
export class LegalDialog { }

@Component({
  selector: 'about-dialog',
  templateUrl: './about-dialog.html',
  styleUrls: ['./about-dialog.css']
})
export class AboutDialog { }
