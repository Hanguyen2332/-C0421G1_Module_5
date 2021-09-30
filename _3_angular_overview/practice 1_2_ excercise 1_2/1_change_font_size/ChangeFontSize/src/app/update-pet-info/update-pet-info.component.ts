import { Component, OnInit } from '@angular/core';
import {IPet} from "../i-pet";

@Component({
  selector: 'app-update-pet-info',
  templateUrl: './update-pet-info.component.html',
  styleUrls: ['./update-pet-info.component.css']
})
export class UpdatePetInfoComponent implements OnInit {
 pet : IPet = {
   name : "Mực",
   image : "https://i2.wp.com/mrcong.com/img/images/2016/09/28/anh-hai-huoc-ve-khuon-mat-cua-cho-026.jpg?w=618&ssl=1"
 };

  constructor() { }

  ngOnInit(): void {
  }

}
