import { Component, OnInit } from '@angular/core';
import {ICustomerType} from "../../model/iCustomerType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkAge} from "../../validation/checkAge";
import {CustomerService} from "../../service/customer.service";
import {CusTypeService} from "../../service/cusType.service";
import {Router} from "@angular/router";
import {IDivision} from "../../model/idivision";
import {IEduDegree} from "../../model/iedu-degree";
import {IPosition} from "../../model/iposition";
import {DivisionService} from "../../service/division.service";
import {EduDegreeService} from "../../service/edu-degree.service";
import {PositionService} from "../../service/position.service";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //division
  divisionList: IDivision[] = [];
  //eduDegree
  eduDegreeList: IEduDegree[] = [];
  //position
  positionList: IPosition[] = [];

  createForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required]),
    dayOfBirth: new FormControl('',[Validators.required,checkAge]),
    idCard: new FormControl('', [Validators.required, Validators.pattern("\\d{9,11}")]),
    phone: new FormControl('',[Validators.required,Validators.pattern("^((090)|(091)|(\\(84\\)\\+90)|(\\(84\\)\\+91))\\d{7}$")]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$")]),
    address: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),

    division: new FormControl(''),
    position: new FormControl(''),
    eduDegree: new FormControl('')

  })

  constructor(private divisionService: DivisionService,
              private eduDegreeService: EduDegreeService,
              private positionService: PositionService,
              private employeeService: EmployeeService,
              private router: Router) {
    // this.getCreateForm();
    this.getDivisionList();
    this.getEduDegreeList();
    this.getPositionList();
  }

  ngOnInit(): void {
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


  create() {
    const employee = this.createForm.value;
    if(this.createForm.valid) {
      this.employeeService.createNew(employee).subscribe(() => {
        alert('Tạo thành công');
        this.createForm.reset();
        this.router.navigateByUrl('employee/list')
      }, e => console.log('Lỗi create Employee: ' + e));
    }
  }
}
