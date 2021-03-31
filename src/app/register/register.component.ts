import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { forbidenNameValidator } from '../shared/user-name.Validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted;

  registerForm: FormGroup = new FormGroup({
    FirstName: new FormControl('',[Validators.required, this.forbidenNameValidator]),
    LastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    emailConfirmation: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    PasswordConfirmation: new FormControl('',[Validators.required,Validators.minLength(8)]),
  },{
    validators:[ this.forbidenEmailValidator, this.forbindenPasswordValidator ]
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
    this.router.navigateByUrl('/login')

    
  }
  forbidenNameValidator(control: AbstractControl):{ [key: string]: any} | null {
    const forbiden = /admin/ .test (control.value);
    return forbiden ? { 'fobidenName': { value: control.value}} : null ;
    }

    forbidenEmailValidator(group: AbstractControl):{ [key: string] : any} | null {
      const email = group.get('email');
      const emailConfirmation = group.get('emailConfirmation');
      if (email.pristine || emailConfirmation.pristine) { 
        return null ;
      }

      return email.value  != emailConfirmation.value ? { 'fobidenEmailMatching': { value: email.value}} : null ;

    } 
    forbindenPasswordValidator(group: AbstractControl):{ [key: string]: any} | null {
      const Password  = group.get('Password');
      const PasswordConfirmation = group.get('PasswordConfirmation')
      if (Password.pristine || PasswordConfirmation.pristine){
        return null ;
      }
      return Password.value  != PasswordConfirmation.value ? { 'fobidenpasswordMatching': { value: Password.value}} : null ;
    }
    
}
