import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postalCodeLookupResponse } from '../models/postalCodeLookupResponse.model';
import { environment } from 'src/environments/environment';

export class WeatherService {
  private apiKey = environment.apiKey;

  private postalCodeSearchUrl = 'http://dataservice.accuweather.com/locations/v1/postalcodes/search';
  private currentConditionsUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  private fiveDayForecastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

  constructor(private http: HttpClient) {
  
  }

  getPhiladelphiaInfo(): Observable<any> {
    return this.http.get<any>(`${this.postalCodeSearchUrl}?apikey=${this.apiKey}&q=19146`);
  }

  getPhiladelphiaWeather(key: string): Observable<string> {
    return this.http.get<any>(`${this.currentConditionsUrl}${key}?apikey=${this.apiKey}`)
  }

  getFiveDayForecast(key: string): Observable<any> {
    return this.http.get<any>(`${this.fiveDayForecastUrl}${key}?apikey=${this.apiKey}`)
  }
}
