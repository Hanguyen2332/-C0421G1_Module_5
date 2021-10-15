import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./delete-customer/delete-customer.component";

const routes: Routes = [
  {path:'list', component:ListCustomerComponent,
  children:[
    {path:'delete/:id', component:DeleteCustomerComponent}
  ]},
  {path:'create', component:CreateCustomerComponent},
  {path:'edit/:id', component:UpdateCustomerComponent},
  // {path:'delete/:id', component:DeleteCustomerComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
