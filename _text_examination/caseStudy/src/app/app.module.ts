import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListXuatChieuComponent } from './list-xuat-chieu/list-xuat-chieu.component';
import { CreateXuatChieuComponent } from './create-xuat-chieu/create-xuat-chieu.component';
import { DeleteXuatChieuComponent } from './delete-xuat-chieu/delete-xuat-chieu.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatNativeDateModule} from "@angular/material/core";
// import { MatDatepickerModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ListXuatChieuComponent,
    CreateXuatChieuComponent,
    DeleteXuatChieuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //phan trang:
    NgxPaginationModule,
    //sorting
    Ng2OrderModule,
    //search
    Ng2SearchPipeModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
