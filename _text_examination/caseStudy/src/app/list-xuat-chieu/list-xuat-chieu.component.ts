import { Component, OnInit } from '@angular/core';
import {Movie} from "../model/movie";
import {XuatChieu} from "../model/xuat-chieu";
import {MovieService} from "../service/movie.service";
import {XuatChieuService} from "../service/xuat-chieu.service";

@Component({
  selector: 'app-list-xuat-chieu',
  templateUrl: './list-xuat-chieu.component.html',
  styleUrls: ['./list-xuat-chieu.component.css']
})
export class ListXuatChieuComponent implements OnInit {

  //movie List:
  movieList: Movie[] = [];
  //movie List:
  xuatChieuList: XuatChieu[] = [];
  //phan trang
  p: number = 1;


  constructor(private movieService: MovieService,
              private xuatChieuSevice: XuatChieuService) {}

  ngOnInit(): void {
    this.getMovieList();
    this.getAllList();
  }

  //main: lấy list Employee:
  getAllList() {
    this.xuatChieuSevice.getAll().subscribe(data => {
      this.xuatChieuList = data;
    }, error => {
      console.log("List is Empty")
    })
  }

  //lay list CusType -> select-option
  getMovieList() {
    this.movieService.getAll().subscribe(responseList => {
      this.movieList = responseList;
    })
  }

  //search:
  name: any;
  movieName: any;

//hàm:
  searchByKeyword() {  //NG: 1. Nhiều tên search k ra kq. 2.TH: đứng tại page 2 --> search tên ở page 1 --> k có kq
    // console.log('input name: ' + this.name);
    // console.log('input divisionName: ' + this.divisionName)
    // if ((this.name == "" || this.name == undefined) && (this.divisionName == '' || this.divisionName == undefined)) {  //2 field rỗng
    //   this.ngOnInit();
    // } else if (this.name !== "" && (this.divisionName == '' || this.divisionName == undefined)) {  //chỉ tìm theo name
    //   this.employeeList = this.employeeList.filter(list => {
    //     return list.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim())
    //   })
    // } else if ((this.name == "" || this.name == undefined) && this.divisionName !== "") { //chỉ tìm theo cusType
    //   this.employeeList = this.employeeList.filter(list => {
    //     return list.division.name == this.divisionName
    //   })
    // } else {
    //   this.employeeList = this.employeeList.filter(list => {  //tìm theo cả 2 field
    //     return (list.division.name == this.divisionName && list.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim()))
    //   })
    // }
  }

  //sorting:
  key: String = '';
  reverse: boolean = false

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
