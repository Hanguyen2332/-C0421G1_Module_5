import { Component, OnInit } from '@angular/core';
import {BusInfo} from "../../model/bus-info";
import {ILocation} from "../../model/ilocation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocationService} from "../../service/location.service";
import {BusService} from "../../service/bus.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {
  //division
  locationList: ILocation[] = [];


  createForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required]),
    busType: new FormControl(1,[Validators.required]),
    // Validators.pattern("^((090)|(093)|(097)\\d{7}$")]
    // ,Validators.pattern("^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$")
    phone: new FormControl('',[Validators.required ,Validators.pattern("^(090)|(093)|(097)\\d{7}$")]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$")]),
    startime: new FormControl('',Validators.required),
    endTime: new FormControl('',Validators.required),
    startingPoint: new FormControl('',Validators.required),
    destination: new FormControl('',Validators.required),

  })

  constructor(private locationService: LocationService,
              private busService: BusService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.getLocationList();
  }

//lay list CusType -> select-option
  getLocationList() {
    this.locationService.getAll().subscribe(responseList => {
      this.locationList = responseList;
    })
  }

  create() {
    // let newObj =JSON.stringify(object);


    const bus = this.createForm.value;
    console.log(this.createForm.value);
    if (this.createForm.valid) {
      this.busService.createNew(bus).subscribe(() => {
        alert('Thêm mới thành công');
        this.createForm.reset();
        this.router.navigateByUrl('')
      }, e => console.log('Lỗi create: ' + e));
    }
  }
}
