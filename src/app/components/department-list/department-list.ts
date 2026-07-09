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
  departmentData2 = signal<string>("HR");

  dataFromChild: string = '';
  dataFromChild2 = signal<string>('');

  receiveData(data: string) {
    this.dataFromChild = data;
  }

  receiveData2(data: string) {
    this.dataFromChild2.set(data);
  }


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




