import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderInfoComponent } from './layout/header-info/header-info.component';
import { FixedBottomComponent } from './layout/fixed-bottom/fixed-bottom.component';
import { CreateCustomerComponent } from './customerManagement/create-customer/create-customer.component';
import { ListCustomerComponent } from './customerManagement/list-customer/list-customer.component';
import { DeleteCustomerComponent } from './customerManagement/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './customerManagement/update-customer/update-customer.component';
import { CreateEmployeeComponent } from './employeeManagement/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employeeManagement/update-employee/update-employee.component';
import { ListEmployeeComponent } from './employeeManagement/list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './employeeManagement/delete-employee/delete-employee.component';
import { CreateServiceComponent } from './serviceManagement/create-service/create-service.component';
import { EditServiceComponent } from './serviceManagement/edit-service/edit-service.component';
import { DeleteServiceComponent } from './serviceManagement/delete-service/delete-service.component';
import { ListServiceComponent } from './serviceManagement/list-service/list-service.component';
import { CreateContractComponent } from './contractManagement/create-contract/create-contract.component';
import { CreateContractDetailComponent } from './contractManagement/create-contract-detail/create-contract-detail.component';
import { ListNowCustomerComponent } from './contractManagement/list-now-customer/list-now-customer.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {CustomerModule} from "./customerManagement/customer.module";
import {NgxPaginationModule} from 'ngx-pagination';

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

    CreateServiceComponent,
    EditServiceComponent,
    DeleteServiceComponent,
    ListServiceComponent,

    CreateContractComponent,
    CreateContractDetailComponent,
    ListNowCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CustomerModule,
    //phan trang:
    NgxPaginationModule
    // CustomerModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
