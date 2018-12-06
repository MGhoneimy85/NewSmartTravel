import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './master/layout/layout.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PackagesComponent } from './packages/packages.component';
import { OurCompanyComponent } from './our-company/our-company.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translation/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeCarouselComponent,
    PartnersComponent,
    ContactUsComponent,
    PackagesComponent,
    OurCompanyComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule
  ],
  exports: [LayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
