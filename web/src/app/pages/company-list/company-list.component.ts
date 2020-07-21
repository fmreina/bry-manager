import { Component, OnInit } from '@angular/core';

import { Company } from '../../entity/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  // styleUrls: ['./company-list.component.css']
  styleUrls: ['../../app.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  error = '';
  success = '';

  company = new Company('', '', '');

  constructor( private companyService : CompanyService) {}

  ngOnInit() {
      this.getCompanies();
  }

  getCompanies(): void {
      this.companyService.getAll().subscribe(
          (result: Company[]) => {
              this.companies = result;
          },
          (error) => {
              this.error = error;
          }
      )
  }

  deleteCompany(company : Company ){
    this.resetErrors();


    this.companyService.delete(company.id).subscribe(
        (result : Company[]) => {
            this.companies = result;
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
