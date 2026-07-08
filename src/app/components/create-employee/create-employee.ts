import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee/employee-service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-create-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['employee'],
    password: ['', [Validators.required, Validators.minLength(6)]],
    designation: [''],
    salary: [0],
  });

  errorMessage = signal<string | null>(null);
  createdEmployee = signal<Employee | null>(null);

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.employeeService.createEmployee(this.employeeForm.getRawValue()).subscribe({
      next: (employee) => {
        console.log(employee);
        this.createdEmployee.set(employee);
        this.errorMessage.set(null);
        this.router.navigate(['/employees', employee.id]);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Failed to create employee.');
      }
    });
  }
}