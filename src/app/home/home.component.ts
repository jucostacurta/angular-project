import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CountriesService } from './home.service';
import { CommonModule } from '@angular/common';
import { ListCountries } from './list-countries-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listCountries = [];

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
  @Input() listCountriesProp: ListCountries = this.listCountries;
}
