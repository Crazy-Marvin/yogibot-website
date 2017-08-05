import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics, Angulartics2Piwik } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // initial Google Analytics and Piwik
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, angulartics2Piwik: Angulartics2Piwik) { }
}
