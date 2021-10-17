import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ILocation} from "../../model/ilocation";
import {BusService} from "../../service/bus.service";
import {LocationService} from "../../service/location.service";
import {BusInfo} from "../../model/bus-info";

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  busObj: BusInfo = {};
  id: any;
  //division
  locationList: ILocation[] = [];


  editForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required]),
    busType: new FormControl('',[Validators.required]),
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
              private router: Router) {
    //get id (tren url)
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      //select-option   - NOTE: Nếu gọi hàm bên ngoài--> do bất đồng bộ --> không thể load lên data (vì chưa có id để so sánh)
      this.getLocationList();
      this.busService.findById(this.id).subscribe(data => {  //Lấy đối tượng cần edit
        this.busObj = data;
        this.editForm.setValue(this.busObj);
      });
    })
  }

  ngOnInit(): void {
  }

//lay list CusType -> select-option
  getLocationList() {
    this.locationService.getAll().subscribe(responseList => {
      this.locationList = responseList;
    })
  }

  edit() {
    const bus = this.editForm.value;
    if (this.editForm.valid) {
      this.busService.edit(this.id, bus).subscribe(() => {
        alert('Chỉnh sửa thành công');
        this.editForm.reset();
        this.router.navigateByUrl('')
      }, e => console.log('Lỗi edit: ' + e));
    }
  }
}
