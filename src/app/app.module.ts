import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectHomeComponent } from './components/sect-home/sect-home.component';
import { SectWorksComponent } from './components/sect-works/sect-works.component';
import { CardWorksComponent } from './components/card-works/card-works.component';
import { CardCountComponent } from './components/card-count/card-count.component';
import { SectAboutComponent } from './components/sect-about/sect-about.component';
import { SectContactComponent } from './components/sect-contact/sect-contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SectHomeComponent,
    SectWorksComponent,
    CardWorksComponent,
    CardCountComponent,
    SectAboutComponent,
    SectContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
