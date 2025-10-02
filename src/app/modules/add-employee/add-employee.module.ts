import { NgModule } from '@angular/core';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from 'src/app/modules/add-employee/pages/add-employee/add-employee.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    SharedModule,
    AddEmployeeRoutingModule
  ]
})
export class AddEmployeeModule { }
