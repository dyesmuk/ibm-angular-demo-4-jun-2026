import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
// ng generate service services/user/userService
  // new code 
  private http = inject(HttpClient);

  // old code 
  // constructor(private http: HttpClient) { }

  private baseUrl = 
  'https://jsonplaceholder.typicode.com/users';

  getUser(id: number): Observable<any> {
return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}








// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {

// }
