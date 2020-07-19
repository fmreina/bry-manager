import { Component, OnInit } from '@angular/core';

import { Employee } from '../entity/employee';
import { EmployeeService } from '../services/employee.service';

// @Component({
//     selector: 'app-root',
//     templateUrl: './employee.component.html',
//     styleUrls: ['./app.component.css']
// })
export class EmployeeComponent implements OnInit {
    employees: Employee[];
    error = '';
    success = '';

    constructor( private employeeService : EmployeeService) {}

    ngOnInit() {
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeeService.getAll().subscribe(
            (result: Employee[]) => {
                this.employees = result;
            },
            (error) => {
                this.error = error;
            }
        )
    }
}