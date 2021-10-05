import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {comparePassword} from "./customValidator/comparePassword";
import {min} from "rxjs/operators";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  countryList = [
    {id:1, name:"Việt Nam"},
    {id:2, name:"Trung Quốc"},
    {id:3, name:"Nhật Bản"},
  ];

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('thanhha@gmail.com',
        [Validators.email, Validators.required]),

      passwordGroup: new FormGroup({
        password: new FormControl('',Validators.minLength(6)),
        confirmPassword: new FormControl('',Validators.minLength(6))
      },[comparePassword]),

      country : new FormControl(1,Validators.required),
      age: new FormControl('',Validators.min(18)),

      gender: new FormControl('0',Validators.required),

      phone:new FormControl('',Validators.pattern("^\\+84[0-9]{9,10}$"))
    })
  }

  ngOnInit(): void {
  }

  // constructor(private fb : FormBuilder) {
  // }
  //
  // ngOnInit(): void {
  //   this.registerForm = this.fb.group ({
  //     email: ['',
  //       [Validators.email, Validators.required]],
  //
  //     passwordGroup : this.fb.group({
  //       password: '',
  //       confirmPassword: ''
  //     },[Validators.minLength(6),comparePassword] )
  //
  //   })
  // }

  onSubmit() {
console.log(this.registerForm)
  }
}
