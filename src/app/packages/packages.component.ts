import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  packagesCatList = ['domestic', 'foreign', 'arab', 'religious', 'all'];
  clicked = 'domestic';
  constructor() { }

  ngOnInit() {
  }

  selectedCategory(cat) {
    console.log(cat);

  }

}
