import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {DeleteCustomerComponent} from "./delete-customer/delete-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import { CustomerRoutingModule } from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2OrderModule} from "ng2-order-pipe";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ViewCustomerComponent } from './view-customer/view-customer.component';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2OrderModule,

    //dialog
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    // BrowserAnimationsModule
  ]
})
export class CustomerModule { }
