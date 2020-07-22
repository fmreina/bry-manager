import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost/api';
  
  employees: Employee[];

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employee`)
      .pipe(
        map((result) => {
          this.employees = result['data'];
          return this.employees;
        }),
        catchError( this.handleError )
      );
  }

  getById(id):Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employee/${id}`)
    .pipe(
      map((result) => {
        this.employees = result;

        return this.employees;
      }),
      catchError( this.handleError )
      );
  }

  storeEmployee(employee: Employee): Observable<Employee[]> {
    // console.log('STORE >', employee);
    return this.http.post(`${this.baseUrl}/employee`, { employee })
      .pipe(map((result) => {
          // console.log('RESULT >', result);
          // console.log('DATA >', result['data']);
          // console.log('EMPLOYEES >', this.employees);
          
          this.employees.push(result['data']); // update the list showed on the page
          // console.log('EMPLOYEES2 >', this.employees);

          return this.employees;
        }),
        catchError(this.handleError)
      );
    return;
  }

  update(employee : Employee[]): Observable<Employee[]>{
    this.employees = employee;
    const emp : Employee = employee[0];
    const id = emp.id;

    return this.http.put(`${this.baseUrl}/employee/${id}`, { data: employee})
      .pipe(map((reslt) => {
        const upEmployee = this.employees.find((employee) => {
          return +employee['id'] === +employee['id'];
        });

        if( upEmployee ){
          upEmployee['login'] = employee['login'];
          upEmployee['password'] = employee['password'];
          upEmployee['name'] = employee['name'];
          upEmployee['cpf'] = employee['cpf'];
          upEmployee['email'] = employee['email'];
          upEmployee['address'] = employee['address'];
        }

        return this.employees;
      }),
      catchError(this.handleError));
  }

  delete(id: number ) : Observable<Employee[]> {
    return this.http.delete(`${this.baseUrl}/employee/${id}`)
      .pipe(map(result => {
        if(Array.isArray(this.employees)){
          const filteredEmployees = this.employees.filter((employee) => {
            return +employee['id'] !== +id;
          });
  
          return this.employees = filteredEmployees;
        }
        return this.employees;
      }),
      catchError(this.handleError));
  }

  // logs the error cause for debug and return an user friendly message
  private handleError( error: HttpErrorResponse ) {
    console.log(error);

    return throwError( 'There was an error while executing the operation.' );
  }

}
