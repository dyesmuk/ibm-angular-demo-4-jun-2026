import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeListResponse } from '../../models/employee-list-response.model';
import { Employee } from '../../models/employee.model';
import { CreateEmployeeRequest } from '../../models/create-employee-request.model';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private http = inject(HttpClient);

  private baseUrl: string = 'http://localhost:3000';

  // getAllEmployees(): Observable<EmployeeListResponse> {
  //   console.log('getAllEmployees');
  //   return this.http.get<EmployeeListResponse>(
  //     `${this.baseUrl}/api/employees`
  //   );
  // }

  getAllEmployees(page: number = 1, limit: number = 10, sortBy?: string, search?: string): Observable<EmployeeListResponse> {
    let url = `${this.baseUrl}/api/employees?page=${page}&limit=${limit}`;
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    console.log('getAllEmployees', url);
    return this.http.get<EmployeeListResponse>(url);
  }

  getEmployeeById(id: string): Observable<Employee> {
    console.log(id);
    return this.http.get<Employee>(
      `${this.baseUrl}/api/employees/${id}`
    );
  }

  createEmployee(employee: CreateEmployeeRequest): Observable<Employee> {
    console.log(employee);
    return this.http.post<Employee>(`${this.baseUrl}/api/employees`, employee);
  }
  
  removeEmployee(id: string): Observable<Employee> {
    console.log(id);
    return this.http.delete<Employee>(`${this.baseUrl}/api/employees/${id}`);
  }

}



// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { EmployeeListResponse } from '../../models/employee-list-response.model';
// import { Employee } from '../../models/employee.model';
// import { CreateEmployeeRequest } from '../../models/create-employee-request.model';
// @Injectable({
//   providedIn: 'root',
// })
// export class EmployeeService {

//   private http = inject(HttpClient);

//   private baseUrl: string = 'http://localhost:3000';

//   private getAuthHeaders(): HttpHeaders {
//     const token = localStorage.getItem('token');
//     console.log(token);
//     return new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     });
//   }

//   // getAllEmployees(): Observable<EmployeeListResponse> {
//   //   console.log('getAllEmployees');
//   //   return this.http.get<EmployeeListResponse>(
//   //     `${this.baseUrl}/api/employees`,
//   //     { headers: this.getAuthHeaders() }
//   //   );
//   // }

//   getAllEmployees(page: number = 1, limit: number = 10, sortBy?: string, search?: string): Observable<EmployeeListResponse> {
//     let url = `${this.baseUrl}/api/employees?page=${page}&limit=${limit}`;

//     if (sortBy) {
//       url += `&sortBy=${sortBy}`;
//     }
//     if (search) {
//       url += `&search=${search}`;
//     }

//     console.log('getAllEmployees', url);
//     return this.http.get<EmployeeListResponse>(url, { headers: this.getAuthHeaders() });
//   }
//   getEmployeeById(id: string): Observable<Employee> {
//     console.log(id);
//     return this.http.get<Employee>(
//       `${this.baseUrl}/api/employees/${id}`,
//       { headers: this.getAuthHeaders() }
//     );
//   }

//   createEmployee(employee: CreateEmployeeRequest): Observable<Employee> {
//     console.log(employee);
//     return this.http.post<Employee>(
//       `${this.baseUrl}/api/employees`, employee,
//       { headers: this.getAuthHeaders() }
//     );
//   }

// }

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


