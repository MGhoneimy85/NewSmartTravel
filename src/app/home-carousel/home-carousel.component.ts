import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeCarouselComponent implements OnInit {

  packagesList = [
    {
      title: 'PARIS ROUNDTRIP',
      desc: '7 Days 6 Nights, Inlduing: Airlines Tickets, Visa, Any more det',
      imgPath: '../../assets/content-images/paris.png'
    },
    {
      title: 'PARIS & ROME ROUNDTRIP',
      desc: '7 Days 6 Nights, Inlduing: Airlines Tickets, Visa, Any more det',
      imgPath: '../../assets/content-images/paris2.png'
    },
    {
      title: 'SHARM EL-SHEIKH ROUNDTRIP',
      desc: '7 Days 6 Nights, Inlduing: Airlines Tickets, Visa, Any more det',
      imgPath: '../../assets/content-images/big_sharm.jpg'
    },
    {
      title: 'CAIRO ROUNDTRIP',
      desc: '7 Days 6 Nights, Inlduing: Airlines Tickets, Visa, Any more det',
      imgPath: '../../assets/content-images/big_cairo.jpg'
    },
    {
      title: 'QATAR ROUNDTRIP',
      desc: '7 Days 6 Nights, Inlduing: Airlines Tickets, Visa, Any more det',
      imgPath: '../../assets/content-images/big_qatar.jpg'
    },
    {
      title: 'HIIJ and UMRAH',
      desc: '7 Days 6 Nights, Inlduing: Airlines Tickets, Visa, Any more det',
      imgPath: '../../assets/content-images/big_SA.jpg'
    }
  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {

  }

  goToDetailsPage(item) {
    console.log('route to details page for :' + item.title);
  }

}
