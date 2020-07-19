import { Component, OnInit } from '@angular/core';

import { Employee } from './entity/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    employees: Employee[];
    error = '';
    success = '';

    employee = new Employee('', '', '', '', '', '');

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

    storeEmployee(form){
        this.error = '';
        this.success = '';

        this.employeeService.storeEmployee(this.employee).subscribe(
            (result: Employee[]) => {
                // update the list of employees
                this.employees = result;

                // success message to the user
                this.success = 'Criado com sucesso';

                // reset the form
                form.reset();
            },
            (error) => this.error = error
        );
    }
}