import { Employee } from './employee.model';
import { Pagination } from './pagination.model';

export interface EmployeeListResponse {
    data: Employee[];
    pagination: Pagination;
}