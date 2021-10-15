import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderInfoComponent } from './layout/header-info/header-info.component';
import { FixedBottomComponent } from './layout/fixed-bottom/fixed-bottom.component';
import { CreateEmployeeComponent } from './employeeManagement/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employeeManagement/update-employee/update-employee.component';
import { ListEmployeeComponent } from './employeeManagement/list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './employeeManagement/delete-employee/delete-employee.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {CustomerModule} from "./customerManagement/customer.module";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ViewEmployeeComponent } from './employeeManagement/view-employee/view-employee.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { UpdateInfoComponent } from './busStationManagement/update-info/update-info.component';
import { DeleteInfoComponent } from './busStationManagement/delete-info/delete-info.component';
import { ListBusComponent } from './busStationManagement/list-bus/list-bus.component';

// import { MatDatepickerModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeaderInfoComponent,
    FixedBottomComponent,
    //
    // CreateCustomerComponent,
    // ListCustomerComponent,
    // DeleteCustomerComponent,
    // UpdateCustomerComponent,

    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,

    HomeComponent,

    ViewEmployeeComponent,
     UpdateInfoComponent,
     DeleteInfoComponent,
     ListBusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CustomerModule,
    FormsModule,
    ReactiveFormsModule,
    //phan trang:
    NgxPaginationModule,
    //sorting
    Ng2OrderModule,
    //search
    Ng2SearchPipeModule,
    //datpicker
    MatDatepickerModule,
    MatNativeDateModule,
    //dialog
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
    // CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [ModalComponent]
})
export class AppModule { }
