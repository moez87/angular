import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ListToDOComponent } from './list-to-do/list-to-do.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '' ,
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{path:"app-list-to-do",component:ListToDOComponent},
{path:"app-add-to-do",component:AddToDoComponent},

{path:"**",component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
