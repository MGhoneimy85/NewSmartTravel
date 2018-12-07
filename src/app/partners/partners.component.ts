import { Component, ViewChild, OnInit } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  images = [
      '../../assets/content-images/emirates.png',
      '../../assets/content-images/airfrance.png',
      '../../assets/content-images/britishairways.png',
      '../../assets/content-images/qatarairways.png',
      '../../assets/content-images/singaporeairways.png',
      '../../assets/content-images/emirates.png',
      '../../assets/content-images/airfrance.png',
      '../../assets/content-images/britishairways.png',
      '../../assets/content-images/qatarairways.png',
      '../../assets/content-images/singaporeairways.png'
  ];
  constructor() { }

  ngOnInit() {
    this.owlElement.next([200]);
  }

}
