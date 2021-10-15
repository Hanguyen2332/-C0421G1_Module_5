import {Component, Inject, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../model/iemployee";
import {EmployeeService} from "../../service/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

export class ViewEmployeeComponent implements OnInit {
  detailObj: IEmployee | undefined;
  constructor( private employeeService: EmployeeService,
               public dialogRef: MatDialogRef<ViewEmployeeComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    this.findById(this.data.id)
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    this.employeeService.findById(id).subscribe(data => this.detailObj = data)
  }

  ok() {
    this.dialogRef.close();
  }
}
