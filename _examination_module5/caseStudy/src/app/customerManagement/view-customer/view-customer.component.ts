import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../service/customer.service";
import {IEmployee} from "../../model/iemployee";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  detailObj: IEmployee | undefined;
  constructor(public dialogRef: MatDialogRef<ViewCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService) {
    this.findById(this.data.id)
  }

  ngOnInit(): void {
  }
  findById(id: number) {
    this.customerService.findById(id).subscribe(data => this.detailObj = data)
  }

  ok() {
    this.dialogRef.close();
  }
}
