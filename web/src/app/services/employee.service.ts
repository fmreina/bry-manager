import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  baseUrl = 'http://localhost:8000/api';
  
  employees: Employee[];

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employee`).pipe(
      map((result) => {
        this.employees = result['data'];
        return this.employees;
      }),
      catchError( this.handleError )
    );
  }

  // logs the error cause for debug and return an user friendly message
  private handleError( error: HttpErrorResponse ) {
    console.log(error);

    return throwError( 'There was an error while executing the operation.' );
  }

}
