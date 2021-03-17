import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  submitted= false ;
   addToDOForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  ADD() {
    this.submitted=true;
    if (this.addToDOForm.invalid)
    {
     return; 
    }
    let todos= JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(this.addToDOForm.value);
    localStorage.setItem('todos',JSON.stringify(todos));
  }

}
