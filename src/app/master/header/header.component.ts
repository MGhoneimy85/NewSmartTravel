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
  menuItems = ['home', 'packages', 'ourcompany', 'partners', 'contactus'];

  clicked = 'home';
  @ViewChild('stickyMenu') menuElement: ElementRef;

  constructor(private language: TranslateService) { }


  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
    console.log(this.menuPosition);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    if (window.innerWidth > 600) {
      const windowScroll = window.pageYOffset;
      if (windowScroll >= this.menuPosition) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  }
  scroll(id) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  onLangChange(lang: string) {
    this.language.use(lang);
  }

}
