import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-font-size',
  templateUrl: './change-font-size.component.html',
  styleUrls: ['./change-font-size.component.css']
})
export class ChangeFontSizeComponent implements OnInit {
  mySize  = 14;
  constructor() { }

  ngOnInit(): void {
  }

  // changeFontsize(value:any) {
  //   this.mySize = value;
  // }

  // changeFontSizeValue(fontSize:any) {
  //   this.fontSize = fontSize;
  // }
}
