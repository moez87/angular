import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    Password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  submitted: boolean;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return ;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let found = users.find(x=> x.email === this.loginForm.value.email && x.Password === this.loginForm.value.Password);

    if(found !== undefined)
    {
      localStorage.setItem('connected-user', JSON.stringify(found));
      // this.route.navigate(['/todo-list']);
      this.route.navigateByUrl('/list-todo');
    }
    else{
      alert("please verify your email and password?")
    }

  }
  }


