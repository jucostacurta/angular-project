import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from './country-interface';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() country: Country = {
    name: { common: '' },
    population: 0,
    continents: [],
    timezones: [],
    languages: [],
    flags: { png: '' },
  };
}
