import { Injectable } from '@angular/core';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee, EmployeePhone } from '../app/app.models';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  URL_EMPLOYEES_LIST = 'https://python-flask-api-to-bff.herokuapp.com/employeesList';
  URL_EMPLOYEE_PHONE = 'https://python-flask-api-to-bff.herokuapp.com/employeePhone';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.URL_EMPLOYEES_LIST, this.httpOptions).pipe(
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  getEmployeePhone(employeeNumber: number): Observable<EmployeePhone> {
    
    //let requestBody = {
    //  employee_number: employeeNumber
    //}
    // colocar o employee_number no param do d
    return this.http.get<EmployeePhone>(this.URL_EMPLOYEE_PHONE + '?employeeNumber='+employeeNumber, this.httpOptions).pipe(
      catchError(this.handleError<EmployeePhone>('getEmployeePhone'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
}

