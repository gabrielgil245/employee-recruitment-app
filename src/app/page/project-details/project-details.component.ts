import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  benchDetails: any[] = [];

  projectDetails: any[] = [];

  addToProjectTitle: string = '';

  projectDetailsFormGroup!: FormGroup;

  projectDetailsFormArray!: FormArray;

  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.initiateProjectDetails();
    this.initiateProjectDetailsFormGroup();
    this.initializeProjectDetailsFormArray();
  }

  ngOnDestroy(): void {
    this.projectService.setProjectDetails(this.projectDetails);
  }

  initiateProjectDetails(): void {
    this.projectDetails = this.projectService.getProjectDetails();
  }

  initiateProjectDetailsFormGroup(): void {
    this.projectDetailsFormGroup = this.fb.group({
      projectDetails: this.fb.array([])
    });
  }

  initializeProjectDetailsFormArray(): void {
    if (!this.projectDetails || !this.projectDetails?.length) return;

    this.projectDetailsFormArray = this.projectDetailsFormGroup.get('projectDetails') as FormArray;
    for (const project of this.projectDetails) {
      const projectFormGroup: FormGroup = this.fb.group({
        title: this.fb.control(project?.title),
        employeeList: this.fb.array([])
      });
      const employeeList = project?.employeeList,
        employeeListFormArray = projectFormGroup.get('employeeList') as FormArray;

      for (const employee of employeeList) {
        const employeeFormGroup: FormGroup = this.fb.group({
          id: this.fb.control(employee?.id),
          firstName: this.fb.control(employee?.firstName),
          lastName: this.fb.control(employee?.lastName),
          role: this.fb.control(employee?.role),
          isSelected: this.fb.control(false)
        });
        employeeListFormArray.push(employeeFormGroup);
      }
      this.projectDetailsFormArray.push(projectFormGroup);
    }
  }

  addToProject(projectIndex: number) {
    if (projectIndex == -1) return;

    this.moveEmployeesBetweenProjects(false, projectIndex);
    this.reinitializeProjectDetails();
  }

  removeFromProject(projectIndex: number) {
    if (projectIndex == -1) return;

    this.moveEmployeesBetweenProjects(true, projectIndex);
    this.reinitializeProjectDetails();
  }

  moveEmployeesBetweenProjects(isBenched: boolean, projectIndex: number) {
    this.isLoading = true;
    const newEmployeeFormArray = isBenched ? this.projectDetailsFormArray?.at(0)?.get('employeeList') as FormArray : this.projectDetailsFormArray?.at(projectIndex)?.get('employeeList') as FormArray;
    for (let index = 0; index < this.projectDetailsFormArray?.value?.length; index++) {
      if ((isBenched && projectIndex != index) || (!isBenched && projectIndex == index)) continue;

      const previousEmployeeFormArray = this.projectDetailsFormArray?.at(index)?.get('employeeList') as FormArray;
      for (let embeddedIndex = previousEmployeeFormArray?.value?.length - 1; embeddedIndex >= 0; embeddedIndex--) {
        const employeeFormGroup = previousEmployeeFormArray?.at(embeddedIndex) as FormGroup;
        if (employeeFormGroup?.get('isSelected')?.value) {
          newEmployeeFormArray.push(employeeFormGroup);
          previousEmployeeFormArray.removeAt(embeddedIndex);
        }
      }
    }
  }

  reinitializeProjectDetails() {
    const newProjectDetails = this.projectDetailsFormGroup?.getRawValue()?.projectDetails;
    this.projectDetails = newProjectDetails;
    this.initiateProjectDetailsFormGroup();
    this.initializeProjectDetailsFormArray();
    this.isLoading = false;
  }
}