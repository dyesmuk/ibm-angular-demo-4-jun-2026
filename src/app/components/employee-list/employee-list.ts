import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  employees = [
    { id: 1, name: 'Sonu', salary: 90000 },
    { id: 2, name: 'Monu', salary: 95000 },
    { id: 3, name: 'Tonu', salary: 93000 }
  ];



  isYes = true;

  fun() {
    this.isYes = !this.isYes;
  }


}

// ngIf 
// ngFor 
// ngSwitch 

