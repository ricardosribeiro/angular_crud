import { Product } from './../product-create/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

  products: Product[];

  constructor(private service: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.service.getProducts().subscribe(p => {
      this.products = p;
      console.log(this.products);
    });
  }
}
