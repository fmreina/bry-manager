import { Company } from './../../entity/company';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../../entity/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // styleUrls: ['./employee.component.css']
  styleUrls: ['../../app.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] ;
  companies: Company[];
  error = '';
  success = '';
  origin: string = '';
  showTableAction = true;

  employee = new Employee('', '', '', '', '', '');

  constructor( private employeeService : EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params.id);
    origin = this.route.snapshot.params.origin;
    // console.log('emp',origin);
    if(String(origin).includes('company/detail')){
      this.showTableAction = false;
    }
  }

  getEmployee(id): void {
    this.employeeService.getById(id).subscribe(
        (result) => {
            this.employees = [result['data']];
            this.companies = this.employees[0]['companies'];
        },
        (error) => {
            this.error = error;
        }
    )
}

  updateEmployee(employee: Employee){
    this.resetErrors();

    this.employeeService.update([employee]).subscribe(
        (result) => {
            this.employees = result;
            this.success = 'Atualizado com sucesso'

            this.router.navigateByUrl('/employee')
        },
        (error) => this.error = error
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

  private back(){
    this.router.navigateByUrl(origin)
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
