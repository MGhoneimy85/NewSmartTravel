import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from '../global-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeCarouselComponent implements OnInit {
  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  fileName = 'assets/data/packagesObject.json';
  packagesList = [];
  packagesListFiltered = [];
  constructor(config: NgbCarouselConfig,
    private globalService: GlobalServiceService,
    private language: TranslateService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router) {

    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.readJsonFile(this.fileName);
  }

  readJsonFile(jsonFileName) {
    this.http.get(jsonFileName).subscribe(data => {
      this.packagesList = data.json();
      this.selectedCategory('home');
      this.myCarousel.select('4');
    }, error => {
      console.log(error);
    });
  }
  selectedCategory(category: string) {
    this.packagesListFiltered = [];
    for (const item of this.packagesList) {
      if (item.cat.toString() === category) {
        this.packagesListFiltered.push(item);
      }
    }
  }

  goToDetailsPage(item) {
    this.globalService.selectedPackage = item;
    this.router.navigate(['/package-details']);
  }

}
