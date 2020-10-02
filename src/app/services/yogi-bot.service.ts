import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Saying } from '../models/saying';
import { HttpClient } from '@angular/common/http';

// Service to get Saying from YogiBot
@Injectable()
export class YogiBotService {

  constructor(private httpClient: HttpClient) { }

  getSaying(language: string): Promise<Saying> {
    return this.httpClient
      .get('https://poopjournal.rocks/YogiBot/API/v2/api.php?command=get_random_one&lng=' + language)
      .toPromise()
      .then(response => response[0] as Saying)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
