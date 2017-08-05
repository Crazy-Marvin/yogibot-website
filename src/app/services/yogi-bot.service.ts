import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import { Saying } from '../models/saying';

// Service to get Saying from YogiBot
@Injectable()
export class YogiBotService {

  constructor(private http: Http) { }

  getSaying(language: string): Promise<Saying> {
    return this.http
      .get('https://poopjournal.rocks/YogiBot/API/v2/api.php?command=get_random_one&lng=' + language)
      .toPromise()
      .then(response => response.json()[0] as Saying)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
