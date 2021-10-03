import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RatingBarComponent} from "./rating-bar-component/rating-bar-component.component";
import {FormsModule} from "@angular/forms";
import { CoutdownComponent } from './coutdown/coutdown.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    CoutdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
