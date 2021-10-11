import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListXuatChieuComponent} from "./list-xuat-chieu/list-xuat-chieu.component";
import {DeleteXuatChieuComponent} from "./delete-xuat-chieu/delete-xuat-chieu.component";
import {CreateXuatChieuComponent} from "./create-xuat-chieu/create-xuat-chieu.component";


const routes : Routes = [
  {path:'', component: ListXuatChieuComponent,
  children:[
    {path:'delete/:id',component:DeleteXuatChieuComponent}
  ]},
  {path:'create', component: CreateXuatChieuComponent}
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
