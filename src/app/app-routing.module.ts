import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/add-employee', pathMatch: 'full'},
  {path: 'add-employee', loadChildren: () => import('./modules/add-employee/add-employee.module').then(m => m.AddEmployeeModule)},
  {path: 'project-details', loadChildren: () => import('./modules/project-details/project-details.module').then(m => m.ProjectDetailsModule)},
  {path: '**', redirectTo: '/add-employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
