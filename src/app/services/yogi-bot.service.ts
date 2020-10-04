import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Service to get Saying from YogiBot
@Injectable()
export class YogiBotService {

  constructor(private httpClient: HttpClient) { }

  getSaying(language: string): Observable<any> {
    return this.httpClient
      .get('https://poopjournal.rocks/YogiBot/API/v2/api.php?command=get_random_one&lng=' + language);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
