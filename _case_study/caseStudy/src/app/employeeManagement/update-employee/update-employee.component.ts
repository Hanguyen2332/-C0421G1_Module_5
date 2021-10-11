import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/icustomer";
import {ICustomerType} from "../../model/iCustomerType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkAge} from "../../validation/checkAge";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CusTypeService} from "../../service/cusType.service";
import {IEmployee} from "../../model/iemployee";
import {IDivision} from "../../model/idivision";
import {IEduDegree} from "../../model/iedu-degree";
import {IPosition} from "../../model/iposition";
import {DivisionService} from "../../service/division.service";
import {EduDegreeService} from "../../service/edu-degree.service";
import {PositionService} from "../../service/position.service";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeObj: IEmployee = {};
  id: any;
  //division
  divisionList: IDivision[] = [];
  //eduDegree
  eduDegreeList: IEduDegree[] = [];
  //position
  positionList: IPosition[] = [];

  editForm: FormGroup = new FormGroup({
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
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    //get id (tren url)
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      //select-option   - NOTE: Nếu gọi hàm bên ngoài--> do bất đồng bộ --> không thể load lên data (vì chưa có id để so sánh)
      this.getDivisionList();
      this.getEduDegreeList();
      this.getPositionList();
      this.employeeService.findById(this.id).subscribe(data => {  //Lấy đối tượng cần edit
        this.employeeObj = data;
        this.editForm.setValue(this.employeeObj);
      });
    })
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

  edit() {
    const customer = this.editForm.value;
    if (this.editForm.valid) {
      this.employeeService.edit(this.id, customer).subscribe(() => {
        alert('Chỉnh sửa thành công');
        this.editForm.reset();
        this.router.navigateByUrl('employee/list')
      }, e => console.log('Lỗi edit employee: ' + e));
    }
  }
}
