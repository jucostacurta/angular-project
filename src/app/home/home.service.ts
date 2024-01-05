import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  getCountries() {
    return axios.get(
      'https://restcountries.com/v3.1/all?fields=name,flags,languages,population,continents,timezones'
    );
  }
  getSearchCountry(country: string) {
    return axios.get(`https://restcountries.com/v3.1/name/${country}`);
  }
}
