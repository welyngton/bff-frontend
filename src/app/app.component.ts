import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { AppService } from './app.service';
import { Employee } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'bff-frontend';
  dataSet = [];
  employessList: Employee[];
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
        this.employessList = data;
      }),
      error => console.log('Error on loading employees: ', error);
  } 

}
