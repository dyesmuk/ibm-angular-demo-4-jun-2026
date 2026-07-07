import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee-service';
import { Employee } from '../../models/employee.model';
import { Pagination } from '../../models/pagination.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  private employeeService = inject(EmployeeService);

  employees = signal<Employee[]>([]);
  pagination = signal<Pagination | null>(null);
  errorMessage = signal<string | null>(null);

  loadEmployees() {
    console.log('loadEmployees');
    this.employeeService.getAllEmployees().subscribe({
      next: (response) => {
        console.log(response);
        this.employees.set(response.data);
        this.pagination.set(response.pagination);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Failed to load employees.');
      }
    });
  }
}


// ngIf 
// ngFor 
// ngSwitch 



// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-employee-list',
//   imports: [CommonModule],
//   templateUrl: './employee-list.html',
//   styleUrl: './employee-list.css',
// })
// export class EmployeeList {

//   employees = [
//     { id: 1, name: 'Sonu', salary: 90000 },
//     { id: 2, name: 'Monu', salary: 95000 },
//     { id: 3, name: 'Tonu', salary: 93000 }
//   ];



//   isYes = true;

//   fun() {
//     this.isYes = !this.isYes;
//   }


// }

// // ngIf 
// // ngFor 
// // ngSwitch 

