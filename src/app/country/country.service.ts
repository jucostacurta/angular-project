import { Injectable } from '@angular/core';
import { CardComponent } from '../card/card.component';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  getCountry(countryName: string) {
    return axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  }
}
