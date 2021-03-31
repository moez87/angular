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

  getAllProduct(){
    return this.http.get("http://localhost:3000/products");
  }

  getPProductById(id:any){
    return this.http.get("http://localhost:3000/products/"+ id );
  }

  updateProductById(id:any,productData:any){
    return this.http.put("http://localhost:3000/products/"+ id , productData);
  }

  deleteProductById(id:any){
    return this.http.delete("http://localhost:3000/products/" + id);
  }
}
