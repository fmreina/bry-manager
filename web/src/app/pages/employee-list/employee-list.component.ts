import { Component, OnInit } from '@angular/core';

import { Employee } from '../../entity/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  // styleUrls: ['./employee-list.component.css']
  styleUrls: ['../../app.component.css']
})
export class EmployeeListComponent implements OnInit {

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

  deleteEmployee(employee : Employee ){
    this.resetErrors();


    this.employeeService.delete(employee.id).subscribe(
        (result : Employee[]) => {
            this.employees = result;
            this.success = 'Removido com sucesso';
        },
        (error) => this.error = error
    );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
