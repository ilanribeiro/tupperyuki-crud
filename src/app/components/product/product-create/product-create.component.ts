import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'btc-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  msgCreatedProduct: string = "Produto criado com sucesso";

  product: Product = {
    name: '',
    price: null,
    image: '',
    description: ''
  }

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  popupMessage(): void {
    this.productService.showMsg(this.msgCreatedProduct);
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      this.popupMessage();
      this.cancel();
    })
  }
}
