import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './change-font-size/change-font-size.component';
import {FormsModule} from "@angular/forms";
import { UpdatePetInfoComponent } from './update-pet-info/update-pet-info.component';
import { ExCaculatorComponent } from './ex-caculator/ex-caculator.component';
import { ExColorPickerComponent } from './ex-color-picker/ex-color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    // practice
    ChangeFontSizeComponent,
    UpdatePetInfoComponent,
    // exercise
    ExCaculatorComponent,
    ExColorPickerComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
