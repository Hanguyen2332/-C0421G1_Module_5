import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/icustomer";
import {ICustomerType} from "../../model/iCustomerType";
import {CustomerService} from "../../service/customer.service";
import {CusTypeService} from "../../service/cusType.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkAge} from "../../validation/checkAge";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerObj: ICustomer = {};
  id: any;
  cusTypeList: ICustomerType[] = [];
  editForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern("^KH-\\d{4}$")]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', [Validators.required, checkAge]),
    gender: new FormControl('0', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern("\\d{9,11}")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((090)|(091)|(\\(84\\)\\+90)|(\\(84\\)\\+91))\\d{7}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$")]),
    address: new FormControl('', Validators.required),

    customerType: new FormControl('')
  })


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private cusTypeService: CusTypeService,
              private router: Router) {
    this.getCusTypeList();
    //get id (tren url)
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.customerService.findById(this.id).subscribe(data => {  //Lấy đối tượng cần edit
        this.customerObj = data;
        this.editForm.setValue(this.customerObj);
        // this.getEditForm();  //setForm
      });
    })
  }

  ngOnInit(): void {
    // this.editForm.setValue(this.customerObj)
  }

  // getEditForm() {
  //   this.editForm = new FormGroup({
  //     name: new FormControl(this.customerObj.name,[Validators.required]),
  //     code: new FormControl(this.customerObj.code,[Validators.required,Validators.pattern("^KH-\\d{4}$")]),
  //     dayOfBirth: new FormControl(this.customerObj.dayOfBirth,[Validators.required,checkAge]),
  //     gender: new FormControl(this.customerObj.gender, Validators.required),
  //     idCard: new FormControl(this.customerObj.idCard, [Validators.required, Validators.pattern("\\d{9,11}")]),
  //     phone: new FormControl(this.customerObj.phone,[Validators.required,Validators.pattern("^((090)|(091)|(\\(84\\)\\+90)|(\\(84\\)\\+91))\\d{7}$")]),
  //     email: new FormControl(this.customerObj.email,[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$")]),
  //     address: new FormControl(this.customerObj.address,Validators.required),
  //
  //     customerType: new FormControl(this.customerObj.customerType.id)
  //   })
  // }

  getCusTypeList() {
    this.cusTypeService.getAll().subscribe(data => {
      this.cusTypeList = data;
    }, error => {
      alert('Please try again')
    })
  }

  edit() {
    const customer = this.editForm.value;
    if (this.editForm.valid) {
      this.customerService.edit(this.id, customer).subscribe(() => {
        alert('Chỉnh sửa thành công');
        this.editForm.reset();
        this.router.navigateByUrl('customer/list')
      }, e => console.log('Lỗi edit Customer: ' + e));
    }
  }
}
