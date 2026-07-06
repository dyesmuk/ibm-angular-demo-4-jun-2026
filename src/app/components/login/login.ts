import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight';
import { UserService } from '../../services/user/user-service';
import { interval } from 'rxjs';
import User from '../../models/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  cdr = inject(ChangeDetectorRef);
  userService = inject(UserService);
  user: User = { id: 0, name: '', username: '', email: '' };

  // constructor(private cdr: ChangeDetectorRef, private userService: UserService) { }


  loadUser() {
    this.userService.getUser(4).subscribe((abc) => {
      console.log(abc);
      this.user = abc;
      this.cdr.markForCheck();
    });

    // this.user 

  }
}



// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { UserService, User } from '../../services/user/user-service';
// import { interval } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

//   counter = 0;
//   counter$ = interval(1000);

//   //  newer versions 
//   cdr = inject(ChangeDetectorRef);
//   userService2 = inject(UserService);

//   // old syntax 
//   constructor(private abc: ChangeDetectorRef, private userSrvice: UserService) { }

//   startCounting() {

//     this.counter$.subscribe((value) => {
//       console.log('Value:', value);
//       this.counter = value;
//       this.cdr.markForCheck();
//     });
//   }
//   // this.userService.
// }































// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef, Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { UserService, User } from '../../services/user/user-service';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })

// export class Login {
//   private userService = inject(UserService);
//   private cdr = inject(ChangeDetectorRef);

//   user: User | null = null;

//   loadUser() {
//     this.userService.getUser(2).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.user = data;
//         this.cdr.markForCheck();

//       }
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component, inject, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';
// import { UserService, User } from '../../services/user/user-service';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {
//   private userService = inject(UserService);

//   user = signal<User | null>(null);
//   loading = signal(false);
//   error = signal<string | null>(null);

//   loadUser() {
//     this.loading.set(true);
//     this.error.set(null);

//     this.userService.getUser(2).subscribe({
//       next: (data) => {
//         this.user.set(data);
//         this.loading.set(false);
//       },
//       error: (err) => {
//         this.error.set('Failed to load user');
//         this.loading.set(false);
//       }
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../../directives/highlight';

// @Component({
//   selector: 'app-login',
//   imports: [CommonModule, FormsModule, HighlightDirective],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

//   isSpecial = false;
//   currentStyles = {};

//   fun = () => {
//     this.isSpecial = !this.isSpecial;
//     this.currentStyles = { 'color': 'orange' };
//   };



// }





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





