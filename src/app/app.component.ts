import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { AppService } from './app.service';
import { Employee, EmployeePhone } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'bff-frontend';
  // dataSet = [];
  employeesList: Employee[];
  displayedColumns: string[] = ['employeeNumber', 'name', 'middle', 'last'];

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log('Begining BFF tests');
    this.loadEmployees();
  }

  loadEmployees() {
    return this.appService.getEmployees().subscribe(
      (data: Employee[]) => {
        console.log(data);
        this.employeesList = data;
       // this.dataSet = this.employeesList;
        // pra cada nego buscar o telefone
        this.employeesList.forEach((e : Employee) => {
          this.loadEmployeePhone(e);
        });
      }),
      error => console.log('Error on loading employees: ', error);
  }

  loadEmployeePhone(employee: Employee) {
    this.appService.getEmployeePhone(employee.employee_number).subscribe(
      (data: EmployeePhone) => {
        employee.phone = data;
        // return data;
      }),
      error => {
        console.log('Error on loading employee phone: ', error);
        return null;
      }
  }

}
