import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/icustomer";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CusTypeService} from "../../service/cusType.service";
import {ICustomerType} from "../../model/iCustomerType";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  //phan trang
  p: number = 1;
  customerList: ICustomer[] = []
  cusTypeList: ICustomerType[] = [];

  constructor(private customerService: CustomerService, private cusTypeService: CusTypeService,
              // private activatedRoute:ActivatedRoute,
              // private router:Router
  ) {
    this.getAllList();
    this.getCusTypeList()
  }

  ngOnInit(): void {
  }

  getAllList() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    }, error => {
      console.log("List is Empty")
    })
  }

  getCusTypeList() {
    this.cusTypeService.getAll().subscribe(customerTypes => {
      this.cusTypeList = customerTypes;
    })
  }
}
