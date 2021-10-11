import {Component, OnInit} from '@angular/core';
import {ICustomerType} from "../../model/iCustomerType";
import {IDivision} from "../../model/idivision";
import {CustomerService} from "../../service/customer.service";
import {CusTypeService} from "../../service/cusType.service";
import {DivisionService} from "../../service/division.service";
import {IEduDegree} from "../../model/iedu-degree";
import {EduDegreeService} from "../../service/edu-degree.service";
import {IPosition} from "../../model/iposition";
import {PositionService} from "../../service/position.service";
import {IEmployee} from "../../model/iemployee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  //employee List:
  employeeList: IEmployee[] = [];
  //division
  divisionList: IDivision[] = [];
  //eduDegree
  eduDegreeList: IEduDegree[] = [];
  //position
  positionList: IPosition[] = [];
  //phan trang
  p: number = 1;


  constructor(private divisionService: DivisionService,
              private eduDegreeService: EduDegreeService,
              private positionService: PositionService,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getDivisionList();
    this.getEduDegreeList();
    this.getPositionList();
    this.getAllList();


  }

  //main: lấy list Employee:
  getAllList() {
    this.employeeService.getAll().subscribe(employees => {
      this.employeeList = employees;
    }, error => {
      console.log("List is Empty")
    })
  }

  //lay list CusType -> select-option
  getDivisionList() {
    this.divisionService.getAll().subscribe(responseList => {
      this.divisionList = responseList;
    })
  }

  //lay list EduDegree -> select-option
  getEduDegreeList() {
    this.eduDegreeService.getAll().subscribe(responseList => {
      this.eduDegreeList = responseList;
    })
  }

  //lay list EduDegree -> select-option
  getPositionList() {
    this.positionService.getAll().subscribe(responseList => {
      this.positionList = responseList;
    })
  }

  //search:
  name: any;
  divisionName: any;

//hàm:
  searchByKeyword() {  //NG: 1. Nhiều tên search k ra kq. 2.TH: đứng tại page 2 --> search tên ở page 1 --> k có kq
    console.log('input name: ' + this.name);
    console.log('input divisionName: ' + this.divisionName)
    if ((this.name == "" || this.name == undefined) && (this.divisionName == '' || this.divisionName == undefined)) {  //2 field rỗng
      this.ngOnInit();
    } else if (this.name !== "" && (this.divisionName == '' || this.divisionName == undefined)) {  //chỉ tìm theo name
      this.employeeList = this.employeeList.filter(list => {
        return list.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim())
      })
    } else if ((this.name == "" || this.name == undefined) && this.divisionName !== "") { //chỉ tìm theo cusType
      this.employeeList = this.employeeList.filter(list => {
        return list.division.name == this.divisionName
      })
    } else {
      this.employeeList = this.employeeList.filter(list => {  //tìm theo cả 2 field
        return (list.division.name == this.divisionName && list.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim()))
      })
    }
  }

  //sorting:
  key: String = '';
  reverse: boolean = false

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
