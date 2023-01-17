import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postalCodeLookupResponse } from '../models/postalCodeLookupResponse.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.apiKey;

  private postalCodeSearchUrl = 'http://dataservice.accuweather.com/locations/v1/postalcodes/search';

  constructor(private http: HttpClient) {
  
  }

  getPhiladelphiaInfo(): Observable<any> {
    return this.http.get<any>(`${this.postalCodeSearchUrl}?apikey=${this.apiKey}&q=19146`);
  }
}
