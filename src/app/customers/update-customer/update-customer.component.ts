import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: any;
  submitted = false;
  product2Form: FormGroup = new FormGroup({
    id: new FormControl(''),
    product2Name: new FormControl('', [Validators.required]),
    product2Description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productsService.getPProductById(this.id).subscribe((response) => {
      this.product2Form.patchValue(response);


    },
      (error) => {
        console.log(error);
      });
  }
  UpdateProduct() {

    if (this.product2Form.invalid) {
      return;

    }

    this.productsService.updateProductById(this.id, this.product2Form.value).subscribe((response) => {
      this.router.navigateByUrl("/customers");
    },
      (error) => {
        console.log(error);
      });
  }
}

