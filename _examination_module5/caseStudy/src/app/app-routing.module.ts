import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListBusComponent} from "./busStationManagement/list-bus/list-bus.component";
import {UpdateInfoComponent} from "./busStationManagement/update-info/update-info.component";
import {DeleteInfoComponent} from "./busStationManagement/delete-info/delete-info.component";

const routes : Routes = [
  //home
  {path:'',component: ListBusComponent ,
  children:[
    {path:'delete/:id',component: DeleteInfoComponent }
  ]},
  {path:'edit/:id',component: UpdateInfoComponent},
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
