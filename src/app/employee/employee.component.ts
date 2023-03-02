import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employees = [];
  }

  ngOnInit(): void {
      this.getEmployees();

    // this.employees = [
    //   {
    //     id: 1,
    //     firstName: 'kwan',
    //     lastName: 'jung',
    //     emailId: 'kwan@gmail.com',
    //   }]
  }

    private getEmployees() {
      this.employeeService.getEmployeesList().subscribe((data) => {
        this.employees = data;
      })
    }

    updateEmployee(id: number){
      this.router.navigate(['update-employee', id]);
    }

    deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe((data)=> {
        console.log(data);
        this.getEmployees();
      })
    }

    employeeDetails(id:number){
      this.router.navigate(['employee-details', id]);
    }

}
