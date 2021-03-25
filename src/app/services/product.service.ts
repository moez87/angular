import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  // Add new product ( used in ass- product compounents)
  AddProduct(productData) {
    let products = JSON.parse(localStorage.getItem('crud') || '[]');
    products.push(productData);
    localStorage.setItem('crud', JSON.stringify(products))
  }
  // get all product ( used in list products compounents)
  GetAllProducts() {
    let products = JSON.parse(localStorage.getItem('crud') || '[]');
    return products;
  }
  // get product by index (used in update-product compounents)
  getProductByindex(index) {
    let cruds = JSON.parse(localStorage.getItem('crud') || '[]');
    let productData = cruds[index];
    return productData ;
  }
  // Update product by index (used in update-product compounents)
  updateProductDataByIndex(updateProductData, index) {
    let cruds = JSON.parse(localStorage.getItem('crud') || '[]');
    cruds.splice(index, 1,updateProductData);
    localStorage.setItem('crud', JSON.stringify(cruds));
  }
  DeleteProductById(i) {
    let products = JSON.parse(localStorage.getItem('crud') || '[]');
    products.splice(i, 1);
    localStorage.setItem('crud', JSON.stringify(products))
  }
}
