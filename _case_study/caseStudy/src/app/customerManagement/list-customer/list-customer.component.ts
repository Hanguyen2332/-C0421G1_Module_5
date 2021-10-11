import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/icustomer";
import {CustomerService} from "../../service/customer.service";
import {CusTypeService} from "../../service/cusType.service";
import {ICustomerType} from "../../model/iCustomerType";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[] = []
  cusTypeList: ICustomerType[] = [];
  //phan trang
  p: number = 1;
  //search by name:
  name: any;
  cusTypeName: any;


  constructor(private customerService: CustomerService,
              private cusTypeService: CusTypeService) {
    // this.getAllList();
    // this.getCusTypeList()
  }

  ngOnInit(): void {
    this.getAllList();
    this.getCusTypeList()
  }

  //main: lấy list Customer
  getAllList() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    }, error => {
      console.log("List is Empty")
    })
  }

  //lay list CusType -> select-option
  getCusTypeList() {
    this.cusTypeService.getAll().subscribe(customerTypes => {
      this.cusTypeList = customerTypes;
    })
  }

  //search:
  searchByKeyword() {
    console.log('input name: ' + this.name);
    console.log('input cusTypeName: ' + this.cusTypeName);
    this.p = 1

    if ((this.name=="" ||this.name==undefined) && (this.cusTypeName=='' || this.cusTypeName==undefined)) {  //2 field rỗng
      this.ngOnInit();
    }else if (this.name!=="" && (this.cusTypeName=='' || this.cusTypeName==undefined)){  //chỉ tìm theo name
      this.customerList = this.customerList.filter(list=> {
        return list.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim())
      })
    }else if ((this.name=="" ||this.name==undefined)  && this.cusTypeName!==""){ //chỉ tìm theo cusType
      this.customerList = this.customerList.filter(list=> {
        return list.customerType.name == this.cusTypeName
      })
    }else {
      this.customerList = this.customerList.filter(list=> {  //tìm theo cả 2 field
        return (list.customerType.name == this.cusTypeName && list.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim()))
      })
    }
  }

  key:String='';
  reverse:boolean=false
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
