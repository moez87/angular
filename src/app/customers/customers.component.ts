import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  products: any;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe((response) => {
       this.products=response;
    },
      (error) => {
        console.log(error);
      });
  }
}
