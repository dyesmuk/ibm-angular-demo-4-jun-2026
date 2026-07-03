import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  isSpecial = false;
  currentStyles = {};

  fun = () => {
    this.isSpecial = !this.isSpecial;
    this.currentStyles = { 'color': 'orange' };
  };



}





// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

//   username: string = '';
//   salary: number = 90000.50;
//   user = { email: 'sonu@ibm.com', password: 'sonu123' };
//   isIndian = false;

//   fun = () => {
//     console.log('fun function called.');
//     this.isIndian = !this.isIndian;
//   };




// }




