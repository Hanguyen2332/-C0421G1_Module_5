import { Component, OnInit } from '@angular/core';
import {BusInfo} from "../../model/bus-info";
import {BusService} from "../../service/bus.service";


@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {

//employee List:
  busList: BusInfo[] = [];

  p: number = 1;


  constructor( private busService: BusService,
              // private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllList();
  }

  //main: lấy list Employee:
  getAllList() {
    this.busService.getAll().subscribe(data => {
      this.busList = data;
    }, error => {
      console.log("List is Empty")
    })
  }

  key:String='';
  reverse:boolean=false
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
