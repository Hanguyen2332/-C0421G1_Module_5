import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-caculator',
  templateUrl: './ex-caculator.component.html',
  styleUrls: ['./ex-caculator.component.css']
})
// export class ExCaculatorComponent implements OnInit {
//   a:string = "0";
//   b:string = "0";
//   result: number = 0;
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
//   cong() {
//     this.result = parseInt(this.a)+parseInt(this.b);
//   }
//   tru() {
//     this.result = parseInt(this.a)-parseInt(this.b);
//   }
//
//   nhan() {
//     this.result = parseInt(this.a)*parseInt(this.b);
//   }
//
//   chia() {
//     this.result = parseInt(this.a)/parseInt(this.b);
//   }
// }

export class ExCaculatorComponent implements OnInit {
  a:number = 0;
  b:number = 0;
  result: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

  cong() {
    this.result = (Number(this.a) + Number(this.b)).toString();
  }
  tru() {
    this.result = (this.a - this.b).toString();
  }

  nhan() {
    this.result =(this.a * this.b).toString();
  }

  chia() {
    if (this.b==0) {
      this.result = "Không thể chia cho 0"
    }else {
      this.result = (this.a / this.b).toString()
    }
  }
}

