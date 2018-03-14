import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LearnpageComponent } from './learnpage/learnpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CardComponent,
    HomepageComponent,
    LearnpageComponent,
    ProfilepageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
