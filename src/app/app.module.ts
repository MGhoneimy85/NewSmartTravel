import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule
  ],
  exports: [LayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
