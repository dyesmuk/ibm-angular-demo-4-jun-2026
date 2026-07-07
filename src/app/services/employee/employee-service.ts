import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeListResponse } from '../../models/employee-list-response.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private http = inject(HttpClient);

  private baseUrl: string = 'http://localhost:3000';

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log(token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getAllEmployees(): Observable<EmployeeListResponse> {
    console.log('getAllEmployees');
    return this.http.get<EmployeeListResponse>(
      `${this.baseUrl}/api/employees`,
      { headers: this.getAuthHeaders() }
    );
  }
}

// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { type Employee } from '../../models/employee.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class EmployeeService {

//   private http = inject(HttpClient);

//   private baseUrl: string = 'http://localhost:3000';

//   getAllEmployees(): Observable<Employee[]> {
//     console.log('getAllEmployees');
//     return this.http.get<Employee[]>(`${this.baseUrl}/api/auth/login`);
//   }

// }
