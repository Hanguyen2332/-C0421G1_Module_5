import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {CusTypeService} from "../../service/cusType.service";
import {Router} from "@angular/router";
import {ICustomer} from "../../model/icustomer";
import {ICustomerType} from "../../model/iCustomerType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkAge} from "../../validation/checkAge";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  cusTypeList: ICustomerType[] = [];
  createForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('',[Validators.required,Validators.pattern("^KH-\\d{4}$")]),
    name: new FormControl('',[Validators.required]),
    dayOfBirth: new FormControl('',[Validators.required,checkAge]),
    gender: new FormControl('0', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern("\\d{9,11}")]),
    phone: new FormControl('',[Validators.required,Validators.pattern("^((090)|(091)|(\\(84\\)\\+90)|(\\(84\\)\\+91))\\d{7}$")]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$")]),
    address: new FormControl('',Validators.required),

    customerType: new FormControl('')
  })

  constructor(private customerService: CustomerService,
              private cusTypeService: CusTypeService,
              private router: Router) {
    // this.getCreateForm();
    this.getCusTypeList();
  }

  ngOnInit(): void {
  }

  // getCreateForm() {
  //   this.createForm = new FormGroup({
  //     id:new FormControl(''),
  //     code: new FormControl(''),
  //     name: new FormControl(''),
  //     dayOfBirth: new FormControl(''),
  //     gender: new FormControl(''),
  //     idCard: new FormControl(''),
  //     phone: new FormControl(''),
  //     email: new FormControl(''),
  //     address: new FormControl(''),
  //
  //     customerType: new FormControl(''),
  //   })
  // }

  getCusTypeList() {
    this.cusTypeService.getAll().subscribe(data => {
      this.cusTypeList = data;
    }, error => {
      alert('Please try again')
    })
  }

  create() {
    const customer = this.createForm.value;
    if(this.createForm.valid) {
      this.customerService.createNew(customer).subscribe(() => {
        alert('Tạo thành công');
        this.createForm.reset();
        this.router.navigateByUrl('customer/list')
      }, e => console.log('Lỗi create Customer: ' + e));
    }
  }
}

