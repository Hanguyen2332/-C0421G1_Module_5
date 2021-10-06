import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: any;

  constructor(private productService:ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const id  = Number(paramMap.get('id'))
      this.product = this.productService.findById(id);
    })
  }

  ngOnInit(): void {
  }

  delete() {
    this.productService.delete(this.product);
    this.router.navigateByUrl('');
  }

  cancelDelete() {
    this.router.navigateByUrl('')
  }
}
