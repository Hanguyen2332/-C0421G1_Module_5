import {Component, OnInit} from '@angular/core';
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
  totalElement: number = 0;
  pageObj: any = {page: 0, size: 2}
  // page = 0;
//employee List:
  busList: BusInfo[] = [];
  locationList: ILocation[] = []; //select-option (search)
  responsePage: any;

  constructor(private busService: BusService,
              private locationService: LocationService) {
  }

  ngOnInit(): void {
    // this.getAllList();
    this.getAllAndSearchByKeyword(this.pageObj);  //khởi tạo view - load first page:  page = 0, name = '', locationId = ''
    this.getLocationList();
  }

  //search + phan trang: PageEvent
  name: string | any = '';
  startingPointId: number | any= '';


  getAllAndSearchByKeyword(page: any) {
    if ((this.name||this.startingPointId)!='') {  //fix lỗi: đứng ở trang 2,3..: không tìm được infor object trang 0/1 --> khi tìm kiếm --> cho về page = 0
      this.pageObj.page = 0;
    }
    let name = this.name.trim();
    console.log('name trim before = ' + this.name)
    console.log('name = ' + name);
    console.log('go from = ' + this.startingPointId);
    console.log('page: ');
    console.log(this.pageObj)
    this.busService.findByKeyWord(name, this.startingPointId, page).subscribe(data => {
      this.responsePage = data;
      console.log('response page: ')
      console.log(data)
      this.busList = data['content'];   //mảng chứa các phần tử (per page)
      this.totalElement = data['totalElement']; //tổng số phần tử
    })
  }

  //
  previousPage() {
    this.pageObj['page']--;
    this.getAllAndSearchByKeyword(this.pageObj);
  }
  nextPage() {
    // this.pageObj['page'] = event.pageIndex.toString()
    // this.pageObj['size'] = event.pageSize.toString();
    this.pageObj['page']++;
    this.getAllAndSearchByKeyword(this.pageObj);
  }

  //sort:
  key: String = '';
  reverse: boolean = false
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
