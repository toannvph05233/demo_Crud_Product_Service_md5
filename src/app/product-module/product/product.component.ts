import {EventEmitter} from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../models/Product";
import {ProductServiceService} from "../../service/product-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  formCreate!: FormGroup;

  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.products = productService.products;
  }
  product: Product = new Product(0, 0, "", "", true);

  ngOnInit(): void {
    // alert(this.activatedRoute.snapshot.params['id']);

    this.formCreate = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("",Validators.minLength(6)),
      img: new FormControl(null,[Validators.required, Validators.minLength(10)]),
      price: new FormControl(0,Validators.pattern('[1-4]')),
      status: new FormControl(true)
    })
  }

  showEdit(product: Product) {
    this.product = new Product(product.id, product.price, product.name, product.img, product.status);
  }

  edit(formEdit: any) {
    console.log(formEdit)
    this.productService.create(formEdit);
  }

  delete(id: number) {
    this.productService.delete(id);
    this.router.navigate(["/home"])
  }

  create() {
    console.log(this.formCreate)
    this.productService.create(this.formCreate.value);
  }

}
