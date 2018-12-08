import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  constructor( private globalService: GlobalServiceService ) { }

  ngOnInit() {
    console.log(this.globalService.selectedPackage);
  }

}
