import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { initFlowbite } from 'flowbite';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { PrimaryCardComponent } from '../components/primary-card/primary-card.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarouselComponent, PrimaryCardComponent, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
