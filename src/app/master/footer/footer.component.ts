import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuItems = ['home' , 'packages' , 'ourcompany' , 'partners' , 'contactus'];
  clicked = 'home';
  constructor() { }

  ngOnInit() {
  }

  scroll(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }

}
