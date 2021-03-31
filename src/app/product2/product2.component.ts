import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
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
  SaveProduct() {

    if (this.product2Form.invalid) {
      return;

    }
  }
}
