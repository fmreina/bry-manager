import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../../entity/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  // styleUrls: ['./employee-create.component.css']
  styleUrls: ['../../app.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employees: Employee[];
  error = '';
  success = '';

  employee = new Employee('', '', '', '', '', '');

  constructor( private employeeService : EmployeeService, private router : Router) {}


  ngOnInit(): void {
    
  }

  storeEmployee(form){
    this.resetErrors();

    this.employee = form.value;
    
    this.employeeService.storeEmployee(this.employee).subscribe(
        (result: Employee[]) => {
          console.log('R >', result);
          console.log('E >', this.employees);
            // update the list of employees
            this.employees = result;
            console.log('E2 >', this.employees);

            // success message to the user
            this.success = 'Criado com sucesso';

            // reset the form
            // form.reset();
            this.router.navigateByUrl('/employee');
        },
        (error) => this.error = error
    );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
