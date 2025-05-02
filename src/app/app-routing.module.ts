import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';

const routes: Routes = [
  {path: '', redirectTo: '/add-employee', pathMatch: 'full'},
  {path: 'project-details', component: ProjectDetailsComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: '**', redirectTo: '/add-employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
