import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {

  slides = [
    { id: 1, image: 'assets/images/image1.jpg', alt: 'First Slide' },
    { id: 2, image: 'assets/images/image2.jpg', alt: 'Second Slide' },
    { id: 3, image: 'assets/images/image3.jpg', alt: 'Third Slide' },
  ];
}
