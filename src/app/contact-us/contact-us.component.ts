import { Component, ViewChild,  OnInit } from '@angular/core';
// import {  } from 'googlemaps';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  constructor() { }
  map: google.maps.Map;
  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(30.048181, 31.201487),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
