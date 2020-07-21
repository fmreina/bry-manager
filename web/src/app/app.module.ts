import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyCreateComponent } from './pages/company-create/company-create.component';

const routes: Routes = [
  // { path: '',   redirectTo: '/company', pathMatch: 'full' }, // redirect to `employee list`
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employee/detail/:id', component: EmployeeComponent },
  { path: 'employee/register', component: EmployeeCreateComponent },
  { path: 'company', component: CompanyListComponent },
  { path: 'company/detail/:id', component: CompanyComponent },
  { path: 'company/register', component: CompanyCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    CompanyListComponent,
    CompanyComponent,
    CompanyCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
