import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "employees", component: EmployeeComponent},
  {path: "create-employee", component: CreateEmployeeComponent },
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: "update-employee/:id", component: UpdateEmployeeComponent},
  {path: "employee-details/:id", component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
