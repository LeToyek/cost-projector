import { Injectable } from '@angular/core';
import { Pricing } from '../../domain/models/pricing';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  examplePricingList: Pricing[] = [
    {
      level: 0,
      price: 0,
      notes: '-',
    },
    {
      level: 1,
      price: 40000,
      notes: '[UI] Simple',
    },
    {
      level: 1,
      price: 40000,
      notes: '[UI] Simple',
    },
    {
      level: 1,
      price: 40000,
      notes: '[UI] Simple',
    },
    {
      level: 1,
      price: 40000,
      notes: '[UI] Simple',
    },
  ];
}
