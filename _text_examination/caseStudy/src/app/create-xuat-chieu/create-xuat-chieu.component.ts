import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {XuatChieu} from "../model/xuat-chieu";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MovieService} from "../service/movie.service";
import {XuatChieuService} from "../service/xuat-chieu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-xuat-chieu',
  templateUrl: './create-xuat-chieu.component.html',
  styleUrls: ['./create-xuat-chieu.component.css']
})
export class CreateXuatChieuComponent implements OnInit {
  minDate = new Date();
  //movie List:
  movieList: Movie[] = [];
  //xuat chiếu List:
  xuatChieuList: XuatChieu[] = [];
  //form:
  createForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern("^CI-\\d{4}$")]),
    ngayChieu: new FormControl('', [Validators.required]),
    ticketNumber: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*$")]),

    movie: new FormControl(''),
  });

constructor(private movieService: MovieService,
  private xuatChieuSevice: XuatChieuService,
  private router: Router) {
  this.getMovieList();
  this.getAllList();

  //
  // this.createForm = new FormGroup({
  //   id: new FormControl(''),
  //   code: new FormControl('', [Validators.required, Validators.pattern("^CI-\\d{4}$")]),
  //   ngayChieu: new FormControl('', [Validators.required, this.checkDate]),
  //   ticketNumber: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*$")]),
  //
  //   movie: new FormControl(''),
  // })
}
  ngOnInit(): void {
  }

  //main: lấy list xuất chiếu: --> check code
  getAllList() {
    this.xuatChieuSevice.getAll().subscribe(data => {
      this.xuatChieuList = data;
    })
  }


  // //validate: ngay
  // checkDate(ngayChieu: AbstractControl) {
  //   let date = new Date(ngayChieu.value);
  //
  //   let day_gap = date.getDate() - new Date().getDate();
  //   let month_gap = date.getMonth() - new Date().getMonth();
  //   let years_gap = date.getFullYear() - new Date().getFullYear();
  //
  //   if ((day_gap + month_gap * 30 + years_gap * 360) < 0) {
  //     return {'invalidDay': true};
  //   }
  //   return null;
  // }

  //lay list movie -> select-option
  getMovieList() {
    this.movieService.getAll().subscribe(responseList => {
      this.movieList = responseList;
    })
  }

  //check code:
  checkCode: boolean = true
  create() {
    //check code:
    const xuatChieu = this.createForm.value;
    let inputCode = xuatChieu.code;
    let count = 0;
    for (let item of this.xuatChieuList) {
      if (item.code === inputCode) {
        this.checkCode = false;
      }else {
        count++;
      }
    }
    //nếu ok --> chuyển check = true (ẩn báo lỗi) --> gọi hàm create:
    if (count === this.xuatChieuList.length)  {
      this.checkCode = true
      if (this.createForm.valid)
        this.xuatChieuSevice.createNew(xuatChieu).subscribe(() => {
          alert('Tạo thành công');
          this.createForm.reset();
          this.router.navigateByUrl('')
        }, e => console.log('Create error: ' + e));
    }
  }
  // create() {
  //   const employee = this.createForm.value;
  //   if (this.createForm.valid) {
  //     this.xuatChieuSevice.createNew(employee).subscribe(() => {
  //       alert('Tạo thành công');
  //       this.createForm.reset();
  //       this.router.navigateByUrl('')
  //     }, e => console.log('Lỗi create Xuat chieu: ' + e));
  //   }
  // }
}
