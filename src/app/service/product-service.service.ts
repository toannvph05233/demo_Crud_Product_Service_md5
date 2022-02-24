import { Injectable } from '@angular/core';
import {Product} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() { }

  products: Product[] = [
    new Product(1, 200, 'Anh Duy', 'https://emoi.vn/wp-content/uploads/2021/02/cach-tao-dang-chup-hinh-dep.jpg', true),
    new Product(2, 300, 'Anh Dat', 'https://dep365.com/wp-content/uploads/2021/02/bi-quyet-chup-anh-dep-cho-nguoi-khong-an-anh-3.jpg', true),
    new Product(3, 400, 'Anh Thang', 'https://aphoto.vn/wp-content/uploads/2016/08/cach-chup-anh-chan-dung-dep.jpg', false),
  ]


  delete(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (id === this.products[i].id) {
        this.products.splice(i, 1);
      }
    }
  }

  create(product: Product){
    let check=true;

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product;
        check = false;
      }
    }

    if (check){
      this.products.push(product);
    }
  }


}
