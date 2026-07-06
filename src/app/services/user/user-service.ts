
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { LoginRequest } from '../../models/login-request.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  // constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000';

  loginUser(loginRequest: LoginRequest): Observable<Employee> {
    console.log(loginRequest);
    return this.http.post<Employee>(`${this.baseUrl}/api/auth/login`, loginRequest);
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
