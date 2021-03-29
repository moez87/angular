import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SharedModule } from '../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [CustomersComponent, UpdateCustomerComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    MatSliderModule,
  ]
})
export class CustomersModule { }
