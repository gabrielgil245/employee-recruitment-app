import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
