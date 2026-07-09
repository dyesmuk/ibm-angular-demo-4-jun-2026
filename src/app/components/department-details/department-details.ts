import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-department-details',
  imports: [],
  templateUrl: './department-details.html',
  styleUrl: './department-details.css',
})
export class DepartmentDetails {

  @Input()
  dataFromDept: string = '';
  dataFromDept2 = input<string>();
  // dataFromDept2: string = '';

}





// import { Component, Input, input, output } from '@angular/core';

// @Component({
//   selector: 'app-department-details',
//   imports: [],
//   templateUrl: './department-details.html',
//   styleUrl: './department-details.css',
// })
// export class DepartmentDetails {

//   name = input<string>();
//   @Input() name2 = '';

//   departmentSelected = output<string>();

//   sendDataToParent() {
//     this.departmentSelected.emit('Accounts Department');
//   }


// }



