import { NgModule } from '@angular/core';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from 'src/app/modules/project-details/pages/project-details/project-details.component';
import { ProjectComponent } from 'src/app/modules/project-details/components/project/project.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectComponent
  ],
  imports: [
    SharedModule,
    ProjectDetailsRoutingModule
  ]
})
export class ProjectDetailsModule { }
