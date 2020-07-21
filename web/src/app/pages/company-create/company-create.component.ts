import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Company } from '../../entity/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  // styleUrls: ['./company-create.component.css']
  styleUrls: ['../../app.component.css']
})
export class CompanyCreateComponent implements OnInit {

  companies: Company[];
  error = '';
  success = '';

  company = new Company('', '', '');

  constructor( private companyService : CompanyService, private router : Router) {}


  ngOnInit(): void {
    
  }

  storeCompany(form){
    this.resetErrors();

    this.company = form.value;
    
    this.companyService.storeCompany(this.company).subscribe(
        (result: Company[]) => {
            // update the list of companies
            this.companies = result;

            // success message to the user
            this.success = 'Criado com sucesso';

            // reset the form
            // form.reset();
            this.router.navigateByUrl('/company');
        },
        (error) => this.error = error
    );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
