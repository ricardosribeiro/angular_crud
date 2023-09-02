import { Product } from './product.model';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: 100
  }

  constructor(private snackBar: MatSnackBar, private service: ProductService) { }

  createProduct(): void {
    this.service.createProduct(this.product).subscribe(() => {
      this.showSuccessMessage();
    });

  }

  showSuccessMessage(): void {
    this.snackBar.open('Produto criado!', 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  cancel(): void {
    this.snackBar.dismiss();
  }
}
