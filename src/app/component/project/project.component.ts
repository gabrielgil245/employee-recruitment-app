import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project!: any;

  @Input() projectIndex: number = -1;

  @Input() projectDetailsFormArray!: FormArray;

  projectFormGroup!: FormGroup;
  
  employeeFormArray!: FormArray;
  
  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.initiateProjectFormGroup();
    this.initiateEmployeeFormArray();
  }

  initiateProjectFormGroup(): void {
    if (!this.projectDetailsFormArray) return;
    
    this.projectFormGroup = this.projectDetailsFormArray.at(this.projectIndex) as FormGroup;
  }

  initiateEmployeeFormArray(): void {
    if (!this.projectFormGroup) return;
    
    this.employeeFormArray = this.projectFormGroup.get('employeeList') as FormArray;
  }

  addExternalEmployeesToProject() {
    this.projectService.setAddToProject(this.projectIndex);
  }

  removeEmployeesFromProject() {
    this.projectService.setRemoveFromProject(this.projectIndex);
  }
}
