import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudUpdateComponent, } from './crud-update/crud-update.component';
import { crudComponent } from './crud/crud.component';
import { Crud2ListComponent } from './crud2-list/crud2-list.component';
import { Crud2Component } from './crud2/crud2.component';
import { ListToDOComponent } from './list-to-do/list-to-do.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
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
  {
    path: "list-todo",
    component: ListToDOComponent
  },
  {
    path: "add-todo",
    component: AddToDoComponent
  },
  {
    path: "add-skills",
    component: AddSkillsComponent
  },
  {
    path: "crud",
    component: crudComponent
  },
  {
    path: "crud-list",
    component: CrudListComponent
  },
  {
    path: "crud-update/:i",
    component: CrudUpdateComponent
  },
  {
    path: "crud2",
    component: Crud2Component
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: "**",
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
