import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class crudComponent implements OnInit {
  submitted = false;
  crudForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    productName: new FormControl('', [Validators.required]),
    productDescription: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }
  AddCrud() {
    this.submitted = true;
    if (this.crudForm.invalid) {
      return;
    }
    // let cruds= JSON.parse(localStorage.getItem('crud2') || '[]');
    // cruds.push(this.crudForm.value);
    // localStorage.setItem('crud2',JSON.stringify(cruds));
    let productData = this.crudForm.value;
    this.productService.AddProduct(productData);

    this.router.navigate(['/crud-list']);
  }
}
