import { Injectable, signal } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = signal<string | null>(null);
  private employee = signal<Employee | null>(null);

}