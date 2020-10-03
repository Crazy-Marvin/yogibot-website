import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Piwik } from 'angulartics2/piwik';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    angulartics2Piwik: Angulartics2Piwik
  ) {
    angulartics2GoogleAnalytics.startTracking();
    angulartics2Piwik.startTracking();
  }
}
