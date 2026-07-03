import { Component } from '@angular/core';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [Home, Login, Register, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}


// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('ibm-angular-demo');
// }

