import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  submitted = false;
  product2Form: FormGroup = new FormGroup({
    id: new FormControl(''),
    product2Name: new FormControl('', [Validators.required]),
    product2Description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
  }
  UpdateProduct(){


  }

}
