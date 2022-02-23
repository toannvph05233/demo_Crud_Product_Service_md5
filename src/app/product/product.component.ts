import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = []

  constructor(private productService: ProductServiceService) {
    this.products = productService.products;
  }

  product : Product = new Product(0,0,"","", true);
  ngOnInit(): void {
  }

  showEdit(product: Product){
    this.product = new Product(product.id,product.price,product.name,product.img,product.status);
  }

  edit(){
    this.productService.edit(this.product);
  }

  delete(id: number){
    this.productService.delete(id);
  }

}
