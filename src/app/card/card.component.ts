import { CommonModule } from '@angular/common';
import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  title = 'País';

  @Input() listCountries: any = [{ name: 'teste' }];
  @Input() country: any = { population: 10, name: 'blabla' };
}
