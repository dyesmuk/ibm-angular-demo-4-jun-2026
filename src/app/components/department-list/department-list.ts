import { Component, signal } from '@angular/core';
import { DepartmentDetails } from '../department-details/department-details';

@Component({
  selector: 'app-department-list',
  imports: [DepartmentDetails],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css',
})
export class DepartmentList {

  departmentData: string = "Admin";



}






// import { Component, signal } from '@angular/core';
// import { DepartmentDetails } from '../department-details/department-details';

// @Component({
//   selector: 'app-department-list',
//   imports: [DepartmentDetails],
//   templateUrl: './department-list.html',
//   styleUrl: './department-list.css',
// })
// export class DepartmentList {

//   username = signal('Vaman');
//   username2 = 'Vaman2';

//   message = signal('');

//   onDepartmentSelected(department: string) {
//     this.message.set(department);
//   }


// }




