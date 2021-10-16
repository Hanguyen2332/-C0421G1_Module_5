import { Component, OnInit } from '@angular/core';
import {BusInfo} from "../../model/bus-info";
import {BusService} from "../../service/bus.service";
import {LocationService} from "../../service/location.service";
import {ILocation} from "../../model/ilocation";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {
totalElement:number = 0;
loading: boolean | undefined;
request:any = {page:0,size:3}
//employee List:
  busList: BusInfo[] = [];
  locationList: ILocation[] = [];

  constructor( private busService: BusService,
               private locationService: LocationService) {
  }

  ngOnInit(): void {
    // this.getAllList();
    this.searchByKeyword(this.request);
    this. getLocationList();
  }
  //search + phan trang: PageEvent
  name: String|any;
  startingPointId: number|any;
  searchByKeyword(page:any) {
    this.loading = true;
    this.busService.findByKeyWord(this.name,this.startingPointId,page).subscribe(data => {
      this.busList= data['content'];
      this.totalElement= data['totalElement'];
      this.loading = false;
    })
  }

  nextPage(event:PageEvent) {
    this.request['page'] = event.pageIndex.toString()
    this.request['size'] = event.pageSize.toString();
    this.searchByKeyword( this.request);
  }

  //main: lấy list Employee:
  // getAllList() {
  //   this.busService.getAll().subscribe(data => {
  //     this.busList = data;
  //     console.log(data)
  //   }, error => {
  //     console.log("List is Empty")
  //   })
  // }

  //
  // // //phan trang: PageEvent
  // private getListRequest(request:any) {
  //   this.loading = true;
  //   this.busService.getAllPage(request).subscribe(data => {
  //     this.busList= data['content'];
  //     this.totalElement= data['totalElement'];
  //     this.loading = false;
  //   })
  // }

  key:String='';
  reverse:boolean=false
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

//lay list CusType -> select-option
  getLocationList() {
    this.locationService.getAll().subscribe(responseList => {
      this.locationList = responseList;
    })
  }

}
