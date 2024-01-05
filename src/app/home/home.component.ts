import { Component, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CountriesService } from './home.service';
import { CommonModule } from '@angular/common';
import { ListCountries } from './list-countries-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listCountries = [];
  search = '';
  searchedCountry = [];

  constructor(private countriesService: CountriesService) {}

  getCountries() {
    this.countriesService
      .getCountries()
      .then((response) => {
        return (this.listCountries = response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getCountries();
  }

  searchCountry() {
    this.countriesService
      .getSearchCountry(this.search)
      .then((response) => {
        return (this.searchedCountry = response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Input() listCountriesProp: ListCountries = this.listCountries;
  @Input() searchedCountryProp: ListCountries = this.searchedCountry;
}
