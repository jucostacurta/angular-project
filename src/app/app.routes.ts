import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Angular project',
    component: HomeComponent,
  },
  {
    path: 'country/:country',
    title: 'Detalhe do país',
    component: CountryComponent,
  },
];
