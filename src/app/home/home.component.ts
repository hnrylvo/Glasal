import { Component, OnInit } from '@angular/core';

import { CarouselComponent } from '../components/carousel/carousel.component';
import { PrimaryCardComponent } from '../components/primary-card/primary-card.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, PrimaryCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
