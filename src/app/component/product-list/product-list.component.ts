import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = []

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  removeItem(id: any) {
    // this.products = this.products.filter(item => item.id !== id)
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    }, (error) => {
      console.log(error.message)
    })
  }
}
