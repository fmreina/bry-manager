import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Company } from '../entity/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'http://localhost:8000/api';
  
  company: Company[];

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/company`)
      .pipe(
        map((result) => {
          this.company = result['data'];
          return this.company;
        }),
        catchError( this.handleError )
      );
  }

  getById(id):Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/company/${id}`)
    .pipe(
      map((result) => {
        this.company = result;

        return this.company;
      }),
      catchError( this.handleError )
      );
  }

  storeCompany(company: Company): Observable<Company[]> {
    return this.http.post(`${this.baseUrl}/company`, { company })
      .pipe(map((result) => {
          this.company.push(result['data']); // update the list showed on the page

          return this.company;
        }),
        catchError(this.handleError)
      );
    return;
  }

  update(company : Company[]): Observable<Company[]>{
    this.company = company;
    const comp : Company = company[0];
    const id = comp.id;

    return this.http.put(`${this.baseUrl}/company/${id}`, { data: company})
      .pipe(map((reslt) => {
        const upCompany = this.company.find((company) => {
          return +company['id'] === +company['id'];
        });

        if( upCompany ){
          upCompany['login'] = company['login'];
          upCompany['password'] = company['password'];
          upCompany['name'] = company['name'];
          upCompany['cpf'] = company['cpf'];
          upCompany['email'] = company['email'];
          upCompany['address'] = company['address'];
        }

        return this.company;
      }),
      catchError(this.handleError));
  }

  delete(id: number ) : Observable<Company[]> {
    return this.http.delete(`${this.baseUrl}/company/${id}`)
      .pipe(map(result => {
        if(Array.isArray(this.company)){
          const filteredCompanies = this.company.filter((company) => {
            return +company['id'] !== +id;
          });
  
          return this.company = filteredCompanies;
        }
        return this.company;
      }),
      catchError(this.handleError));
  }

  // logs the error cause for debug and return an user friendly message
  private handleError( error: HttpErrorResponse ) {
    console.log(error);

    return throwError( 'There was an error while executing the operation.' );
  }

}
