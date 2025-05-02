import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectDetails: any[] = [
    {
      title: 'Bench',
      employeeList: []
    },
    {
      title: 'Project A',
      employeeList: [
        { id: 1, firstName: 'John', lastName: 'Doe', role: 'Scrum Master' },
        { id: 2, firstName: 'Janet', lastName: 'Harris', role: 'Lead Developer' },
        { id: 3, firstName: 'George', lastName: 'Morales', role: 'Senior Developer' },
        { id: 4, firstName: 'Amy', lastName: 'Sanchez', role: 'Quality Analyst' },
        { id: 5, firstName: 'Dwayne', lastName: 'Marter', role: 'Quality Analyst' },
        { id: 6, firstName: 'Katie', lastName: 'Foster', role: 'Associate Developer' },
        { id: 7, firstName: 'Houston', lastName: 'Brown', role: 'Associate Developer' }
      ]
    },
    {
      title: 'Project B',
      employeeList: [
        { id: 8, firstName: 'Jane', lastName: 'Doe', role: 'Scrum Master' },
        { id: 9, firstName: 'Jack', lastName: 'Brown', role: 'Lead Developer' },
        { id: 10, firstName: 'Gina', lastName: 'Mancha', role: 'Quality Analyst' },
        { id: 11, firstName: 'David', lastName: 'Green', role: 'Quality Analyst' },
        { id: 12, firstName: 'Adam', lastName: 'West', role: 'Associate Developer' },
        { id: 13, firstName: 'Bruce', lastName: 'Wayne', role: 'Associate Developer' }
      ]
    },
    {
      title: 'Project C',
      employeeList: [
        { id: 14, firstName: 'Wane', lastName: 'Cross', role: 'Scrum Master' },
        { id: 15, firstName: 'Ford', lastName: 'Smith', role: 'Lead Developer' },
        { id: 16, firstName: 'Cassandra', lastName: 'Tyler', role: 'Senior Developer' },
        { id: 17, firstName: 'Janelle', lastName: 'Benavides', role: 'Quality Analyst' },
        { id: 18, firstName: 'Michael', lastName: 'Watson', role: 'Quality Analyst' },
        { id: 19, firstName: 'Jennifer', lastName: 'Sanchez', role: 'Associate Developer' },
        { id: 20, firstName: 'Stephanie', lastName: 'Rose', role: 'Associate Developer' }
      ]
    }
  ];

  employeeCount: number = 0;

  addToProject: BehaviorSubject<number> = new BehaviorSubject(-1);

  removeFromProject: BehaviorSubject<number> = new BehaviorSubject(-1);

  constructor() { }

  getProjectDetails() {
    return this.projectDetails;
  }

  setProjectDetails(projectDetails: any[]) {
    this.projectDetails = projectDetails;
  }

  setEmployeeToBench(employee: any) {
    for (const project of this.projectDetails) {
      this.employeeCount += project.employeeList.length;
    }
    employee.id = this.employeeCount + 1;
    this.projectDetails[0].employeeList.push(employee);
  }

  removeEmployeeFromBench(index: number) {
    this.projectDetails[0].employeeList.splice(index, 1)
  }

  getAddToProject() {
    return this.addToProject;
  }

  setAddToProject(projectIndex: number = -1) {
    this.addToProject.next(projectIndex);
  }

  getRemoveFromProject() {
    return this.removeFromProject;
  }

  setRemoveFromProject(projectIndex: number = -1) {
    this.removeFromProject.next(projectIndex);
  }
}
