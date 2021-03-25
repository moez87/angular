import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ListToDOComponent } from './list-to-do/list-to-do.component';
import { UpdateToDOComponent } from './update-to-do/update-to-do.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { crudComponent } from './crud/crud.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudUpdateComponent } from './crud-update/crud-update.component';
import { CreditPipe } from './pipes/credit.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { Crud2Component } from './crud2/crud2.component';
import { Crud2ListComponent } from './crud2-list/crud2-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    FooterComponent,
    Page404Component,
    AddToDoComponent,
    ListToDOComponent,
    UpdateToDOComponent,
    AddSkillsComponent,
    crudComponent,
    CrudListComponent,
    CrudUpdateComponent,
    CreditPipe,
    SearchPipe,
    Crud2Component,
    Crud2ListComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
