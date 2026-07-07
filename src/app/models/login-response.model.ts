import { Employee } from './employee.model';

export interface LoginResponse {
  employee: Employee;
  token: string;
}