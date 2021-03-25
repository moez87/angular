import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css']
})
export class Crud2Component implements OnInit {
  submitted= false ;
     crud2Form: FormGroup = new FormGroup({
      id: new FormControl(''),
     name: new FormControl('',[Validators.required]),
     description: new FormControl('',[Validators.required]),
      
    });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  AddCrud2() {
    this.submitted=true;
    if (this.crud2Form.invalid)
    {
     return; 
    }
    let cruds= JSON.parse(localStorage.getItem('crud2') || '[]');
    cruds.push(this.crud2Form.value);
    localStorage.setItem('crud2',JSON.stringify(cruds));
    this.router.navigate(['/crud2-list'])
  }

}
