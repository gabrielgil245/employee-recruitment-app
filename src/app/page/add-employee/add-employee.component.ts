import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeFormGroup!: FormGroup;

  employeeListBench: any[] = [];
  
  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.initiateAddEmployeeFormGroup();
    this.initiateEmployeeListBench();
  }

  initiateAddEmployeeFormGroup() {
    this.addEmployeeFormGroup = this.fb.group({
      firstName: this.fb.control(null, [Validators.required]),
      lastName: this.fb.control(null, [Validators.required]),
      role: this.fb.control(null, [Validators.required])
    });
  }

  initiateEmployeeListBench() {
    this.employeeListBench = this.projectService.getProjectDetails()[0].employeeList;
  }

  submitEmployee() {
    this.projectService.setEmployeeToBench(this.addEmployeeFormGroup.getRawValue());
    this.initiateAddEmployeeFormGroup();
  }

  removeEmployee(index: number) {
    this.projectService.removeEmployeeFromBench(index);
  }

}
