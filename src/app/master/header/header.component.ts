import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  sticky: Boolean = false;
  menuPosition: any;
  menuItems = ['home' , 'packages' , 'ourcompany' , 'partners' , 'contactus'];

  clicked = 'home';
  @ViewChild('stickyMenu') menuElement: ElementRef;

  constructor(private language: TranslateService) { }


  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
    console.log(this.menuPosition);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  scroll(id, event) {
    const el = document.getElementById(id);
    event.preventDefault();
    event.target.className = 'nav-item nav-link active';
    el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }

  onLangChange(lang: string) {
    this.language.use(lang);
  }

}