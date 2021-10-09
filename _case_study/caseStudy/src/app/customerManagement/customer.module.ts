import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {DeleteCustomerComponent} from "./delete-customer/delete-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import { CustomerRoutingModule } from './customer-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CustomerModule { }
