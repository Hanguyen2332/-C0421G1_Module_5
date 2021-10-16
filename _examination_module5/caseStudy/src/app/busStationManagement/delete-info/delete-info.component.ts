import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BusInfo} from "../../model/bus-info";
import {BusService} from "../../service/bus.service";

@Component({
  selector: 'app-delete-info',
  templateUrl: './delete-info.component.html',
  styleUrls: ['./delete-info.component.css']
})
export class DeleteInfoComponent implements OnInit {
 busObj :BusInfo = {};
 id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private busService: BusService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = Number(paramMap.get("id"));
      this.busService.findById(this.id).subscribe(object => {
        this.busObj = object;
        console.log(this.busObj)
      })
    })
  }

  ngOnInit(): void {
  }

  cancelDelete() {
    this.router.navigateByUrl("")
  }

  delete() {
    this.busService.delete(this.id).subscribe(()=> {
      alert('Xóa thành công');
      window.location.reload(); // cập nhật lại trang list
    },error => console.log('Xóa không thành công, lỗi: ' + error))
  }

}
