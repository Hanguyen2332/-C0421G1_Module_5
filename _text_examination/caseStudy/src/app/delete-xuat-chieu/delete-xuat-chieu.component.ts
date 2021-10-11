import { Component, OnInit } from '@angular/core';
import {XuatChieu} from "../model/xuat-chieu";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {XuatChieuService} from "../service/xuat-chieu.service";

@Component({
  selector: 'app-delete-xuat-chieu',
  templateUrl: './delete-xuat-chieu.component.html',
  styleUrls: ['./delete-xuat-chieu.component.css']
})
export class DeleteXuatChieuComponent implements OnInit {

  id: any;
  xuatChieuObj:XuatChieu = {}
  // constructor(private divisionService: DivisionService,
  //             private eduDegreeService: EduDegreeService,
  //             private positionService: PositionService,
  //             private employeeService: EmployeeService) { }
  constructor(private xuatChieuService: XuatChieuService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = paramMap.get("id");
      this.xuatChieuService.findById(this.id).subscribe(object => {
        this.xuatChieuObj = object;
        console.log(this.xuatChieuObj)
      })
    })
  }

  ngOnInit(): void {
  }


  cancelDelete() {
    this.router.navigateByUrl("")
  }

  delete() {
    this.xuatChieuService.delete(this.id).subscribe(()=> {
      alert('Xóa thành công');
      this.router.navigateByUrl('');
      window.location.reload(); // cập nhật lại trang list
    },error => console.log('Xóa không thành công, lỗi: ' + error))
  }
}
