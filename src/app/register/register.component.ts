import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted;

  registerForm: FormGroup = new FormGroup({
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    emailConfirmation: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    PasswordConfirmation: new FormControl('',[Validators.required]),
  });
  constructor(private router :Router) { }

  ngOnInit(): void {
    
  }

  

  register(){
    this.submitted=true;
    if (this.registerForm.invalid)
    {
     return; 
    }
    
    let users= JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.registerForm.value);
    localStorage.setItem('users',JSON.stringify(users));
    this.registerForm.reset();
    this.router.navigateByUrl('/app-add-to-do')

    
  }

}
