import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

  export class crudComponent implements OnInit {
    submitted= false ;
     crudForm: FormGroup = new FormGroup({
      id: new FormControl(''),
      productName: new FormControl('',[Validators.required]),
      productDescription: new FormControl('',[Validators.required]),
      quantity: new FormControl('',[Validators.required]),
    });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  AddCrud() {
    this.submitted=true;
    if (this.crudForm.invalid)
    {
     return; 
    }
    let cruds= JSON.parse(localStorage.getItem('crud') || '[]');
    cruds.push(this.crudForm.value);
    localStorage.setItem('crud',JSON.stringify(cruds));
    this.router.navigate(['/crud-list'])
  }
}
