import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./employeeManagement/list-employee/list-employee.component";
import {DeleteEmployeeComponent} from "./employeeManagement/delete-employee/delete-employee.component";
import {UpdateEmployeeComponent} from "./employeeManagement/update-employee/update-employee.component";
import {CreateEmployeeComponent} from "./employeeManagement/create-employee/create-employee.component";
import {HomeComponent} from "./home/home.component";

const routes : Routes = [
  //home
  {path:'',component: HomeComponent },
  //customer
  {path:'customer',
  loadChildren: () => import('./customerManagement/customer.module').then(module => module.CustomerModule)},
  //employee:
  {path:'employee/list',component: ListEmployeeComponent,
  children:[
    {path:'delete/:id',component: DeleteEmployeeComponent}
  ]},
  {path:'employee/edit/:id',component: UpdateEmployeeComponent},
  {path:'employee/create',component: CreateEmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
