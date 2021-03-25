import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  currentDate= new Date;
  searchText:any;
  crud:any;//= JSON.parse(localStorage.getItem('crud') || '[]');
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.crud= this.productService.GetAllProducts();
  }

  deleteTask(i){

    this.productService.DeleteProductById(i);
    this.crud= this.productService.GetAllProducts();
    // this.crud.splice(i, 1);
    // localStorage.setItem('crud', JSON.stringify(this.crud))
  }
  

}
