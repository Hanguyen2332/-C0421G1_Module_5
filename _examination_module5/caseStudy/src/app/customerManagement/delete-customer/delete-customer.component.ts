import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CusTypeService} from "../../service/cusType.service";
import {ICustomer} from "../../model/icustomer";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../dialog-data";
import {ICustomerType} from "../../model/iCustomerType";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerObjDialog:ICustomer = {}

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private cusTypeService: CusTypeService,
              private router: Router,

              private dialog: MatDialog,
              public dialogRef: MatDialogRef<DeleteCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.findById(this.data.id);
  }

  findById(id: number) {
    this.customerService.findById(id).subscribe(data => this.customerObjDialog = data)
  }

  //----------------------//

  cancelDelete() {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.delete(this.data.id).subscribe(()=> {
      alert('Xóa thành công');
      window.location.reload(); // cập nhật lại trang list
    },error => console.log('Xóa không thành công, lỗi: ' + error))
  }
}
