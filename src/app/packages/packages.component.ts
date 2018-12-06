import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  packagesCatList = ['domestic', 'foreign', 'arab', 'religious', 'all'];
  packagesList = [
    {
      cat: 'domestic',
      title: 'cairo',
      titleAR: 'القاهره',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/cairo.png'
    },
    {
      cat: 'domestic',
      title: 'luxor',
      titleAR: 'لقصر',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/luxor.png'
    },
    {
      cat: 'domestic',
      title: 'sharm',
      titleAR: 'شرم الشيخ',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/sharm.png'
    },
    {
      cat: 'domestic',
      title: 'hurghada',
      titleAR: 'الغردقه',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/hurghada.png'
    },
    {
      cat: 'foreign',
      title: 'paris',
      titleAR: 'باريس',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/paris3.png'
    },
    {
      cat: 'foreign',
      title: 'rome',
      titleAR: 'روما',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/rome.png'
    },
    {
      cat: 'foreign',
      title: 'usa',
      titleAR: 'امريكا',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/usa.png'
    },
    {
      cat: 'arab',
      title: 'qatar',
      titleAR: 'قطر',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/qatar.png'
    },
    {
      cat: 'arab',
      title: 'dubai',
      titleAR: 'دبي',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/dubai.png'
    },
    {
      cat: 'religious',
      title: 'Hijj & Umrah',
      titleAR: 'حج و عمره',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/hijjandumrah.png'
    },
    {
      cat: 'religious',
      title: 'Hijj',
      titleAR: 'حج',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/SA.png'
    },
    {
      cat: 'religious',
      title: 'Umrah',
      titleAR: 'عمره',
      startingPrice: '3.999 EGP',
      imgPath: '../../assets/content-images/SA2.png'
    }
  ];
  packagesListFiltered: any;
  clicked = 'domestic';
  constructor(private language: TranslateService) { }

  ngOnInit() {
    this.selectedCategory(this.clicked);
  }

  selectedCategory(category: string) {
    this.packagesListFiltered = [];
    if (category === 'all') {
      this.packagesListFiltered = this.packagesList;
    } else {
      for (const item of this.packagesList) {
        if (item.cat.toString() === category) {
          this.packagesListFiltered.push(item);
        }
      }
    }
  }

  goToDetailsPage(item) {
    console.log('route to details page for :' + item.title);
  }
}
