import { CommonModule } from '@angular/common';
import { Component, Injectable, Input } from '@angular/core';
import { ListCountries } from '../list-countries';
import { Country } from '../country';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  title = 'País';

  @Input() listCountries: ListCountries = [];

  @Input() country: Country = {
    name: { common: '' },
    population: 0,
    continents: [],
    timezones: [],
    languages: [],
    flags: { png: '' },
  };
}
