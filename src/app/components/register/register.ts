

import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user-service';
import { RegisterResponse } from '../../models/register-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  registerResponse = signal<RegisterResponse | null>(null);
  errorMessage = signal<string | null>(null);

  registerForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.userService.registerUser(this.registerForm.getRawValue()).subscribe({
      next: (response: any) => {
        console.log(response);
        this.registerResponse.set(response);
        this.errorMessage.set(null);
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage.set('Registration failed. Please try again.');
      }
    });
  }
}

// import { Component, inject, signal } from '@angular/core';
// import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { UserService } from '../../services/user/user-service';
// import { RegisterResponse } from '../../models/register-response.model';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   imports: [ReactiveFormsModule],
//   templateUrl: './register.html',
//   styleUrl: './register.css',
// })
// export class Register {

//   private fb = inject(FormBuilder);
//   private userService = inject(UserService);
//   private router = inject(Router);

//   registerResponse = signal<RegisterResponse | null>(null);
//   errorMessage = signal<string | null>(null);

//   // registerForm = this.fb.group([]);
//   // registerForm = this.fb.group([
//   //   { firstName: [''] },
//   //   { lastName: [''] }
//   // ]);


//   // bad code -  
//   // registerForm = this.fb.nonNullable.group([
//   //   { firstName: ['', Validators.required, Validators.minLength(4)] },
//   //   { lastName: ['', Validators.required, Validators.minLength(4)] },
//   //   { email: ['', Validators.required, Validators.email] },
//   //   { password: ['', Validators.required, Validators.minLength(6)] },
//   // ]);

//   // good code -  
//   registerForm = this.fb.nonNullable.group({
//     firstName: ['', Validators.required, Validators.minLength(4)],
//     lastName: ['', Validators.required, Validators.minLength(4)],
//     email: ['', Validators.required, Validators.email],
//     password: ['', Validators.required, Validators.minLength(6)],
//   });

//   onSubmit() {

//     if (this.registerForm.invalid) {
//       this.registerForm.markAllAsTouched();
//       return;
//     }


//     this.userService.registerUser(this.registerForm.getRawValue()).subscribe({
//       next: (response) => {
//         console.log(response);
//         this.registerResponse.set(response);
//         this.errorMessage.set(null);
//         this.router.navigate(['/login']);
//       },
//       error: (err) => {
//         console.log(err);
//         this.errorMessage.set('Registration failed. Please try again.');
//       }
//     });
//   }
// }



// import { Component, inject } from '@angular/core';
// import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { UserService } from '../../services/user/user-service';
// import { RegisterResponse } from '../../models/register-response.model';

// @Component({
//   selector: 'app-register',
//   imports: [ReactiveFormsModule],
//   templateUrl: './register.html',
//   styleUrl: './register.css',
// })
// export class Register {
//   private fb = inject(FormBuilder);
//   private userService = inject(UserService);

//   registerForm = this.fb.nonNullable.group({
//     firstName: ['', Validators.required],
//     lastName: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]],
//   });

//   registerResponse: RegisterResponse | null = null;
//   errorMessage: string | null = null;

//   onSubmit() {
//     if (this.registerForm.invalid) {
//       this.registerForm.markAllAsTouched();
//       return;
//     }

//     this.userService.registerUser(this.registerForm.getRawValue()).subscribe({
//       next: (response) => {
//         console.log(response);
//         this.registerResponse = response;
//         this.errorMessage = null;
//       },
//       error: (err) => {
//         console.log(err);
//         this.errorMessage = 'Registration failed. Please try again.';
//       }
//     });
//   }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   imports: [],
//   templateUrl: './register.html',
//   styleUrl: './register.css',
// })
// export class Register {}


