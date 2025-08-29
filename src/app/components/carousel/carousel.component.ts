import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnDestroy {
  readonly slides = [
    'assets/images/item2.jpg',
    'https://lh4.googleusercontent.com/proxy/eUCa9UiYEBdgPAsqbCingJnKDSnB244HNRJvEcmDvvOBuiDtjXF1rZ1MucBiqQwvNkB77tgTaT1av_EuPRY1s9iN5FaNPjgky3qwW9XCDNL7bPGJZHIv8papxteDmBTE20c',
    'https://www.installux-es.com/hubfs/estructuras-de-aluminio.jpg',
    'https://ventglas.com/wp-content/uploads/2015/02/21102008033.jpg',
    'https://aluminiossardina.es/wp-content/uploads/2022/10/ventanas-grandes-o-pequenas.jpg'
  ];

  currentIndex = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  showSlide(index: number): void {
    this.currentIndex.set(index);
  }

  prevSlide(): void {
    const prev = (this.currentIndex() - 1 + this.slides.length) % this.slides.length;
    this.currentIndex.set(prev);
  }

  nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.slides.length;
    this.currentIndex.set(next);
  }

  private startAutoPlay(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
