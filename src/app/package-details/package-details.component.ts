import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  constructor( private globalService: GlobalServiceService , private language: TranslateService ) { }

  ngOnInit() {
    console.log(this.globalService.selectedPackage);
  }

}
