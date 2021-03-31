import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  addProduct(productData:any){
      return this.http.post("http://localhost:3000/products", productData);
  }

  getAllProduct(){}

  getPProductById(id:any){}

  updateProductById(id:any,productData:any){}

  deleteProductById(id:any){}
}
