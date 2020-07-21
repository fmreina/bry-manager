import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Company } from '../../entity/company';
import { CompanyService } from '../../services/company.service';
import { Employee } from 'src/app/entity/employee';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  // styleUrls: ['./company.component.css']
  styleUrls: ['../../app.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[] ;
  employees: Employee[];
  error = '';
  success = '';
  origin: string = '';
  showTableAction = true;

  company = new Company('', '', '');

  constructor( private employeeService : CompanyService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getCompany(this.route.snapshot.params.id);
    origin = this.route.snapshot.params.origin;
    // console.log('comp',origin);
    if(String(origin).includes('employee/detail')){
      this.showTableAction = false;
    }
  }

  getCompany(id): void {
    this.employeeService.getById(id).subscribe(
        (result) => {
            this.companies = [result['data']];
            this.employees = this.companies[0]['employees'];
        },
        (error) => {
            this.error = error;
        }
    )
}

  updateCompany(company: Company){
    this.resetErrors();

    this.employeeService.update([company]).subscribe(
        (result) => {
            this.companies = result;
            this.success = 'Atualizado com sucesso'

            this.router.navigateByUrl('/company')
        },
        (error) => this.error = error
    )
  }

  deleteCompany(company : Company ){
    this.resetErrors();

    this.employeeService.delete(company.id).subscribe(
        (result : Company[]) => {
            this.companies = result;
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
