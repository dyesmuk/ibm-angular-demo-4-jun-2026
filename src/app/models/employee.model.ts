import { EmployeeRole } from "./employee.role";

export interface Employee {
    token: string;
    employee: Employee | null;
    _id: string;
    id: string;

    firstName: string;
    lastName: string;
    fullName: string;

    email: string;
    avatar: string | null;

    role: EmployeeRole;

    designation: string;
    salary: number;
    isActive: boolean;

    department: string;

    joinDate: string;
    createdAt: string;
    updatedAt: string;

    __v: number;
}
