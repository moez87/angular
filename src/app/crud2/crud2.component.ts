import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css']
})
export class Crud2Component implements OnInit {
  cruds = [];
  submitted = false;
  showUpdateButtom = false;
  i: any;
  crud2Form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  AddCrud2() {
    this.submitted = true;
    if (this.crud2Form.invalid) {
      return;
    }
    this.cruds.push(this.crud2Form.value);
    this.crud2Form.reset();
    this.submitted = false;
  }
  showUserData(i) {
    // console.log(i);
    this.i = i;
    const userData = this.cruds[i]
    this.crud2Form.patchValue(userData);
    this.showUpdateButtom = true;
  }

  saveUpdate() {
    this.submitted = true;
    if (this.crud2Form.invalid) {
      return;
    }
    this.showUpdateButtom = false;
    this.cruds.splice(this.i, 1, this.crud2Form.value)
    this.crud2Form.reset();
    this.submitted = false;

  }
 DeleteUpdatedCrud(i)
 {
  this.cruds.splice(i, 1)
 }

}
