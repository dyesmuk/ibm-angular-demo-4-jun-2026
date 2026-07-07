import { Department } from "./department.model";
import { EmployeeRole } from "./employee.role";

export interface Employee {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | null;
    role: EmployeeRole;
    isActive: boolean;
    designation?: string;
    salary?: number;
    department?: Department;
    joinDate: string;
    createdAt: string;
    updatedAt: string;
    fullName: string;
    id: string;
    __v: number;
}