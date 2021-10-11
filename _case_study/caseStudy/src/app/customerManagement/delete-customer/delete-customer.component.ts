import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CusTypeService} from "../../service/cusType.service";
import {ICustomer} from "../../model/icustomer";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  id: any;
  customerObj:ICustomer = {}

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private cusTypeService: CusTypeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = paramMap.get("id");
      this.customerService.findById(this.id).subscribe(object => {
        this.customerObj = object;
        console.log(this.customerObj)
      })
    })
  }

  ngOnInit(): void {
  }


  cancelDelete() {
    this.router.navigateByUrl("/customer/list")
  }

  delete() {
    this.customerService.delete(this.id).subscribe(()=> {
      alert('Xóa thành công');
      this.router.navigateByUrl('/customer/list');
      window.location.reload(); // cập nhật lại trang list
    },error => console.log('Xóa không thành công, lỗi: ' + error))
  }
}
