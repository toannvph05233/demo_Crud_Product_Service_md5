import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/Product";
import {ProductServiceService} from "../../service/product-service.service";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductServiceService) {
    // this.products = productService.products;
  }

  ngOnInit(): void {
  }

}
