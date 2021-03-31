import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  submitted = false;
  product2Form: FormGroup = new FormGroup({
    id: new FormControl(''),
    product2Name: new FormControl('', [Validators.required]),
    product2Description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });
  constructor(private router:Router,private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  
  SaveProduct(){
      this.submitted=true;
      if (this.product2Form.invalid){
        return;
      }
      this.productsService.addProduct(this.product2Form.value).subscribe((response)=>{
            this.router.navigateByUrl('/customers')
      },(error)=>{
        console.log(error);
        
      })


  }

}
