import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ex-color-picker',
  templateUrl: './ex-color-picker.component.html',
  styleUrls: ['./ex-color-picker.component.css']
})
export class ExColorPickerComponent implements OnInit {
  color = "black";

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(value: string) {
    switch (value) {
      case "Đỏ":
        this.color = "red";
        break;
      case "Cam":
        this.color = "orange";
        break;
      case "Vàng":
        this.color = "yellow";
        break;
      case "Lục":
        this.color = "green";
        break;
      case "Lam":
        this.color = "blue";
        break;
      default:
        this.color = "black";
    }
  }
}
