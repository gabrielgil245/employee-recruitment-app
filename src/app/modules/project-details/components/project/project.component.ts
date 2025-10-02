import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project!: any;

  @Input() projectIndex: number = -1;

  @Input() projectDetailsFormArray!: FormArray;

  @Output() addToProjectEvent: EventEmitter<number> = new EventEmitter<number>();
  
  @Output() removeFromProjectEvent: EventEmitter<number> = new EventEmitter<number>();

  projectFormGroup!: FormGroup;
  
  employeeFormArray!: FormArray;
  
  constructor() { }
  
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
    this.addToProjectEvent.emit(this.projectIndex);
  }

  removeEmployeesFromProject() {
    this.removeFromProjectEvent.emit(this.projectIndex);
  }
}
