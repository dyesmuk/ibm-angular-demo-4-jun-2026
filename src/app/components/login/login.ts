import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight';
import { AuthService } from '../../services/auth/auth-service';
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
  authService = inject(AuthService);
  private router = inject(Router);

  user: LoginRequest = { email: '', password: '' };

  loggedInUser = signal<LoginResponse | null>(null);
  loginMessage = signal<string | null>(null);

  login = () => {
    this.authService.loginUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.loggedInUser.set(data);
        // localStorage.setItem('token', data.token); // store token 
        this.authService.setLoggedIn(data.token); // better way to store token
        setTimeout(() => {
          this.router.navigate(['/employees']);
        }, 1000);
      },
      error: (error) => {
        console.error(error);
        this.loginMessage.set(error.error.error);
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
// import { AuthService } from '../../services/user/user-service';
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
//   authService = inject(AuthService);
//   user: LoginRequest = { email: '', password: '' };

//   loggedInUser = signal<LoginResponse | null>(null);
//   loginMessage = signal<string | null>(null);
//   token: string = '';

//   login = () => {
//     this.authService.loginUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.loggedInUser.set(data);
//       },
//       error: (error) => {
//         console.error(error);
//         this.loginMessage.set(error.error.error);
//       },
//       complete: () => { console.log('completed.') }
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { AuthService } from '../../services/user/user-service';
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
//   authService = inject(AuthService);
//   user: LoginRequest = { email: '', password: '' };
//   //   user2 = signal<LoginRequest>({ email: '', password: '' });

//   // user2.set('') // setter 
//   //   user2() // getter 


//   loggedInUser = signal<Employee | null>(null);
//   loginMessage = signal<string | null>(null);
//   token: string = '';


//   login = () => {
//     this.authService.loginUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.loggedInUser.set(data.employee);
//         this.token = data.token;
//       },
//       error: (error) => {
//         console.error(error);
//         this.loginMessage.set(error.error.error);
//       },
//       complete: () => { console.log('completed.') }
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { AuthService } from '../../services/user/user-service';
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
//   authService = inject(AuthService);
//   user: LoginRequest = { email: '', password: '' };
//   loggedInUser: Employee | null = null;
//   loginMessage: string = '';
//   token: string = '';


//   login = () => {
//     this.authService.loginUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.loggedInUser = data.employee;
//         this.token = data.token;
//         this.cdr.markForCheck();
//       },
//       error: (error) => {
//         console.error(error);
//         this.loginMessage = error.error.error;
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
// // import { AuthService } from '../../services/user/user-service';
// // import User from '../../models/user.model';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {

// //   cdr = inject(ChangeDetectorRef);
// //   authService = inject(AuthService);
// //   user: User = { id: 0, name: '', username: '', email: '' };

// //   // constructor(private cdr: ChangeDetectorRef, private authService: AuthService) { }

// //   // syntax with error handling 
// //   loadUser = () => {
// //     this.authService.getUser(4).subscribe({
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
// //   this.authService.getUser(4).subscribe((abc) => {
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
// // import { AuthService, User } from '../../services/user/user-service';
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
// //   authService2 = inject(AuthService);

// //   // old syntax 
// //   constructor(private abc: ChangeDetectorRef, private userSrvice: AuthService) { }

// //   startCounting() {

// //     this.counter$.subscribe((value) => {
// //       console.log('Value:', value);
// //       this.counter = value;
// //       this.cdr.markForCheck();
// //     });
// //   }
// //   // this.authService.
// // }































// // import { CommonModule } from '@angular/common';
// // import { ChangeDetectorRef, Component, inject } from '@angular/core';
// // import { FormsModule } from '@angular/forms';
// // import { HighlightDirective } from '../../directives/highlight';
// // import { AuthService, User } from '../../services/user/user-service';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })

// // export class Login {
// //   private authService = inject(AuthService);
// //   private cdr = inject(ChangeDetectorRef);

// //   user: User | null = null;

// //   loadUser() {
// //     this.authService.getUser(2).subscribe({
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
// // import { AuthService, User } from '../../services/user/user-service';

// // @Component({
// //   selector: 'app-login',
// //   imports: [CommonModule, FormsModule, HighlightDirective],
// //   templateUrl: './login.html',
// //   styleUrl: './login.css',
// // })
// // export class Login {
// //   private authService = inject(AuthService);

// //   user = signal<User | null>(null);
// //   loading = signal(false);
// //   error = signal<string | null>(null);

// //   loadUser() {
// //     this.loading.set(true);
// //     this.error.set(null);

// //     this.authService.getUser(2).subscribe({
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









