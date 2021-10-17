import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from "ng2-order-pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {UpdateInfoComponent} from './busStationManagement/update-info/update-info.component';
import {DeleteInfoComponent} from './busStationManagement/delete-info/delete-info.component';
import {ListBusComponent} from './busStationManagement/list-bus/list-bus.component';
import { CreateBusComponent } from './busStationManagement/create-bus/create-bus.component';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";

// import { MatDatepickerModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    UpdateInfoComponent,
    DeleteInfoComponent,
    ListBusComponent,
    CreateBusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    //phan trang:
    // MatPaginatorIntl,
    MatPaginatorModule,
    NgxPaginationModule,
    //sorting
    Ng2OrderModule,
    //datpicker
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
