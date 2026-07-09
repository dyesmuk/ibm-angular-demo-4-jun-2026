import { Component, inject, input, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee-service';
import { Employee } from '../../models/employee.model';
import { RouterLink } from '@angular/router';
import { SalaryPipe } from '../../pipes/salary/salary-pipe';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../shared/services/modal/modal';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink, SalaryPipe, CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {


  private modalService = inject(ModalService)
  private employeeService = inject(EmployeeService)

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
  async onDelete() {
    const confirmed = await this.modalService.confirm({
      title: 'Delete Employee',
      message: `Are you sure you want to remove ${this.employee()?.firstName}? This cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Keep',
    })

    if (confirmed) {
      this.employeeService.removeEmployee(this.id())
    }
  }

}

