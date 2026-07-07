
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/login-request.model';
import { LoginResponse } from '../../models/login-response.model';
import { RegisterResponse } from '../../models/register-response.model';
import { RegisterRequest } from '../../models/register-request.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  // constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000';

  loginUser(request: LoginRequest): Observable<LoginResponse> {
    console.log(request);
    return this.http.post<LoginResponse>(`${this.baseUrl}/api/auth/login`, request);
  }

  registerUser(request: RegisterRequest): Observable<RegisterResponse> {
    console.log(request);
    return this.http.post<RegisterResponse>(`${this.baseUrl}/api/auth/register`, request);
  }
}






// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import User from '../../models/user.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   // ng generate service services/user/userService
//   // new code 
//   private http = inject(HttpClient);

//   // old code 
//   // constructor(private http: HttpClient) { }

//   private baseUrl =
//     'https://jsonplaceholder.typicodbbbe.com/users';

//   getUser(id: number): Observable<User> {
//     return this.http.get<User>(`${this.baseUrl}/${id}`);
//   }
// }








// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {

// }

