import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from './country.service';
import { CommonModule } from '@angular/common';
import { Country } from '../card/country-interface';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent {
  countryName: string = '';
  countryData = [];

  constructor(route: ActivatedRoute, private countryService: CountryService) {
    this.countryName = route.snapshot.params['country'];
  }

  async getCountry(countryName: string) {
    await this.countryService
      .getCountry(countryName)
      .then((response) => {
        return (this.country = response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getCountry(this.countryName);
  }
  @Input() country: Country = {
    name: { common: '' },
    population: 0,
    continents: [],
    timezones: [],
    languages: [],
    flags: { png: '' },
  };
}
