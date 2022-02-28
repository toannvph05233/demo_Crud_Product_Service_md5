import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductServiceService) {
    // this.products = productService.products;
  }


  ngOnInit(): void {
  }

}
