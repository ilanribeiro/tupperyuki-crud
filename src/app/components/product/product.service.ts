import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar,
              private httpClient: HttpClient) { }

  showMsg(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 5000,
    })
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseURL, product)
  }

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL)
  }
}
