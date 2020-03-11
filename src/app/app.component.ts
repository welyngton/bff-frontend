import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'bff-frontend2';
  dataSet = [];
  dataSet1 = [];
  dataSet2 = [];
  jsonURLMock = "../assets/employees.json";

  ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name'];


  constructor(private http: HttpClient) {

    this.http.get(this.jsonURLMock).subscribe((data: any) => {
      console.log('json lido');
      this.dataSet1 = data;
      console.log('json atribuido');
      
      this.dataSet = this.dataSet1
      // .slice(0,10)
      .map(employee => {
        
        delete employee.name;
        delete employee.telephone;
        delete employee.address;
        delete employee.position;
        delete employee.absences;

        employee['name'] = this.getNameByEmployeeNumber(employee)
        return employee;
     });
    });

    // this.http.get(this.jsonURLMock).subscribe((data: any) => {
    //   this.dataSet2 = data;
    // });


  }


  ngOnInit() {
    console.log('oi on init');


  }

  getNameByEmployeeNumber(employee) {

    // let retorno = this.dataSet1.find(e => {
    //   console.log('e: ', employee, ' | ', ' employee: ', e);
    //   return (e.employee_number == employee.employee_number)
    // });

    let retorno = { 
      "last": "Eduardo",
      "first": "Mason",
      "middle": "Armin"
    };
    return retorno;
  }
}
