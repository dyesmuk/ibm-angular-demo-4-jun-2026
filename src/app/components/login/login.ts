import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight';
import { UserService } from '../../services/user/user-service';
import { LoginRequest } from '../../models/login-request.model';
import { LoginResponse } from '../../models/login-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userService = inject(UserService);
  private router = inject(Router);

  user: LoginRequest = { email: '', password: '' };

  loggedInUser = signal<LoginResponse | null>(null);
  errorMessage = signal<string | null>(null);

  login = () => {
    this.userService.loginUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.loggedInUser.set(data);
        this.router.navigate(['/employees']);
      },
      error: (error) => {
        console.error(error);
        this.errorMessage.set(error.error.error);
      },
      complete: () => { console.log('completed.') }
    });
  }
}

// https://angular.dev/guide/forms/template-driven-forms 

// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { UserService } from '../../services/user/user-service';
// import { LoginRequest } from '../../models/login-request.model';
// import { LoginResponse } from '../../models/login-response.model';


// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

//   cdr = inject(ChangeDetectorRef);
//   userService = inject(UserService);
//   user: LoginRequest = { email: '', password: '' };

//   loggedInUser = signal<LoginResponse | null>(null);
//   errorMessage = signal<string | null>(null);
//   token: string = '';

//   login = () => {
//     this.userService.loginUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.loggedInUser.set(data);
//       },
//       error: (error) => {
//         console.error(error);
//         this.errorMessage.set(error.error.error);
//       },
//       complete: () => { console.log('completed.') }
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { UserService } from '../../services/user/user-service';
// import { LoginRequest } from '../../models/login-request.model';
// import { Employee } from '../../models/employee.model';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

//   cdr = inject(ChangeDetectorRef);
//   userService = inject(UserService);
//   user: LoginRequest = { email: '', password: '' };
//   //   user2 = signal<LoginRequest>({ email: '', password: '' });

//   // user2.set('') // setter 
//   //   user2() // getter 


//   loggedInUser = signal<Employee | null>(null);
//   errorMessage = signal<string | null>(null);
//   token: string = '';


//   login = () => {
//     this.userService.loginUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.loggedInUser.set(data.employee);
//         this.token = data.token;
//       },
//       error: (error) => {
//         console.error(error);
//         this.errorMessage.set(error.error.error);
//       },
//       complete: () => { console.log('completed.') }
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { UserService } from '../../services/user/user-service';
// import { LoginRequest } from '../../models/login-request.model';
// import { Employee } from '../../models/employee.model';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

//   cdr = inject(ChangeDetectorRef);
//   userService = inject(UserService);
//   user: LoginRequest = { email: '', password: '' };
//   loggedInUser: Employee | null = null;
//   errorMessage: string = '';
//   token: string = '';


//   login = () => {
//     this.userService.loginUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.loggedInUser = data.employee;
//         this.token = data.token;
//         this.cdr.markForCheck();
//       },
//       error: (error) => {
//         console.error(error);
//         this.errorMessage = error.error.error;
//         this.cdr.markForCheck();
//       },
//       complete: () => { console.log('completed.') }
//     });
//   }
// }



// // import { CommonModule } from '@angular/common';
// // import { ChangeDetectorRef, Component, inject } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { HighlightDirective } from '../../directives/highlight';
// // import { UserService } from '../../services/user/user-service';
// // import User from '../../models/user.model';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {

// //   cdr = inject(ChangeDetectorRef);
// //   userService = inject(UserService);
// //   user: User = { id: 0, name: '', username: '', email: '' };

// //   // constructor(private cdr: ChangeDetectorRef, private userService: UserService) { }

// //   // syntax with error handling 
// //   loadUser = () => {
// //     this.userService.getUser(4).subscribe({
// //       next: (data) => {
// //         console.log(data);
// //         this.user = data;
// //         this.cdr.markForCheck();
// //       },
// //       error: (err) => { console.error(err); },
// //       complete: () => { console.log('completed.') }
// //     });
// //   }
// // }


// // (abc) => {
// //     console.log(abc);
// //     this.user = abc;
// //     this.cdr.markForCheck();
// //   }


// // syntax for no error handling
// // subscribe((v) => {})
// // syntax with error handling
// // subscribe({next, error, complete})
// // subscribe({next, error})
// // subscribe({next: () => {}, error: () => {}, complete: () => {}})
// // subscribe({next: (v) => {}, error: (e) => {}, complete: (c) => {}})

// // syntax for no error handling
// // loadUser() {
// //   this.userService.getUser(4).subscribe((abc) => {
// //     console.log(abc);
// //     this.user = abc;
// //     this.cdr.markForCheck();
// //   });
// // }
// // }



// // import { CommonModule } from '@angular/common';
// // import { ChangeDetectorRef, Component, inject } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { HighlightDirective } from '../../directives/highlight';
// // import { UserService, User } from '../../services/user/user-service';
// // import { interval } from 'rxjs';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {

// //   counter = 0;
// //   counter$ = interval(1000);

// //   //  newer versions 
// //   cdr = inject(ChangeDetectorRef);
// //   userService2 = inject(UserService);

// //   // old syntax 
// //   constructor(private abc: ChangeDetectorRef, private userSrvice: UserService) { }

// //   startCounting() {

// //     this.counter$.subscribe((value) => {
// //       console.log('Value:', value);
// //       this.counter = value;
// //       this.cdr.markForCheck();
// //     });
// //   }
// //   // this.userService.
// // }































// // import { CommonModule } from '@angular/common';
// // import { ChangeDetectorRef, Component, inject } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { HighlightDirective } from '../../directives/highlight';
// // import { UserService, User } from '../../services/user/user-service';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })

// // export class Login {
// //   private userService = inject(UserService);
// //   private cdr = inject(ChangeDetectorRef);

// //   user: User | null = null;

// //   loadUser() {
// //     this.userService.getUser(2).subscribe({
// //       next: (data) => {
// //         console.log(data);
// //         this.user = data;
// //         this.cdr.markForCheck();

// //       }
// //     });
// //   }
// // }

// // import { CommonModule } from '@angular/common';
// // import { Component, inject, signal } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { HighlightDirective } from '../../directives/highlight';
// // import { UserService, User } from '../../services/user/user-service';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {
// //   private userService = inject(UserService);

// //   user = signal<User | null>(null);
// //   loading = signal(false);
// //   error = signal<string | null>(null);

// //   loadUser() {
// //     this.loading.set(true);
// //     this.error.set(null);

// //     this.userService.getUser(2).subscribe({
// //       next: (data) => {
// //         this.user.set(data);
// //         this.loading.set(false);
// //       },
// //       error: (err) => {
// //         this.error.set('Failed to load user');
// //         this.loading.set(false);
// //       }
// //     });
// //   }
// // }

// // import { CommonModule } from '@angular/common';
// // import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { HighlightDirective } from '../../directives/highlight';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {

// //   isSpecial = false;
// //   currentStyles = {};

// //   fun = () => {
// //     this.isSpecial = !this.isSpecial;
// //     this.currentStyles = { 'color': 'orange' };
// //   };



// // }





// // import { CommonModule } from '@angular/common';
// // import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {

// //   username: string = '';
// //   salary: number = 90000.50;
// //   user = { email: 'sonu@ibm.com', password: 'sonu123' };
// //   isIndian = false;

// //   fun = () => {
// //     console.log('fun function called.');
// //     this.isIndian = !this.isIndian;
// //   };




// // }









