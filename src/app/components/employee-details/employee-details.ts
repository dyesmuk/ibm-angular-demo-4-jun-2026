import { Component, inject, input, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee-service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {

  private employeeService = inject(EmployeeService);

  id = input.required<string>();

  employee = signal<Employee | null>(null);
  errorMessage = signal<string | null>(null);

  ngOnInit() {
    this.employeeService.getEmployeeById(this.id()).subscribe({
      next: (data) => {
        console.log(data);
        this.employee.set(data);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Failed to load employee.');
      }
    });
  }
}