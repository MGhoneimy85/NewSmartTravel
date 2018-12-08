import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements AfterViewInit {
  packagesCatList = ['domestic', 'foreign', 'arab', 'religious', 'all'];
  fileName = 'assets/data/packagesObject.json';
  packagesList = [];

  packagesListFiltered: any;
  clicked = 'domestic';
  constructor(private language: TranslateService,
    private globalService: GlobalServiceService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router) { }


  ngAfterViewInit() {
    this.readJsonFile(this.fileName);
  }
  readJsonFile(jsonFileName) {
    this.http.get(jsonFileName).subscribe(data => {
      this.packagesList = data.json();
      this.selectedCategory(this.clicked);
    }, error => {
      console.log(error);
    });
  }

  selectedCategory(category: string) {
    this.packagesListFiltered = [];
    if (category === 'all') {
      for (const item of this.packagesList) {
        if (item.cat.toString() !== 'home') {
          this.packagesListFiltered.push(item);
        }
      }
    } else {
      for (const item of this.packagesList) {
        if (item.cat.toString() === category) {
          this.packagesListFiltered.push(item);
        }
      }
    }
  }

  goToDetailsPage(item) {
    this.globalService.selectedPackage = item;
    this.router.navigate(['/package-details']);
  }

}
