import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/icustomer";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CusTypeService} from "../../service/cusType.service";
import {IEmployee} from "../../model/iemployee";
import {DivisionService} from "../../service/division.service";
import {EduDegreeService} from "../../service/edu-degree.service";
import {PositionService} from "../../service/position.service";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  id: any;
  employeeObj:IEmployee = {}
  // constructor(private divisionService: DivisionService,
  //             private eduDegreeService: EduDegreeService,
  //             private positionService: PositionService,
  //             private employeeService: EmployeeService) { }
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = paramMap.get("id");
      this.employeeService.findById(this.id).subscribe(object => {
        this.employeeObj = object;
        console.log(this.employeeObj)
      })
    })
  }

  ngOnInit(): void {
  }


  cancelDelete() {
    this.router.navigateByUrl("/employee/list")
  }

  delete() {
    this.employeeService.delete(this.id).subscribe(()=> {
      alert('Xóa thành công');
      this.router.navigateByUrl('/employee/list');
      window.location.reload(); // cập nhật lại trang list
    },error => console.log('Xóa không thành công, lỗi: ' + error))
  }
}
