import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:any;
  editForm: any;
  constructor(private productService:ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=> {
      const id = Number(paramMap.get('id'));  //hàm get('') --> return string||null --> phải convert sang number
      this.product = this.productService.findById(id);



      // // ------------test name--------------//
      // const name = paramMap.get('name');  //hàm get('') --> return string||null --> xử lý: tại service-->  findByName(name: String|null )
      // this.product = this.productService.findByName(name);

    })
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
    console.log(this.editForm)
  }

  edit() {
    if (this.editForm !== undefined) {
      const product = this.editForm.value;
      // this.editForm.setValue(this.product) //đổ giá trị lên form
      this.productService.editProduct(product);

      // console.log('sp edit: ' + product)

      this.editForm.reset();
      this.router.navigateByUrl('');
    }
  }

}
