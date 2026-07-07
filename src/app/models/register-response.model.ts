import { Employee } from './employee.model';

export interface RegisterResponse {
  employee: Employee;
  token: string;
}