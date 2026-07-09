import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

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

  childData: string = 'Marketing';

  @Output() dataEvent = new EventEmitter<string>();

  childData2: string = 'Finance';

  dataEvent2 = output<string>();

  sendData() {
    this.dataEvent.emit(this.childData);
    this.dataEvent2.emit(this.childData2);
  }

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



