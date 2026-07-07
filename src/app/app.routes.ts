import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { EmployeeList } from './components/employee-list/employee-list';
import { Page404 } from './components/page404/page404';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { authGuard } from './guards/auth.guard';
import { DepartmentList } from './components/department-list/department-list';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    // { path: 'employees', component: EmployeeList }, // not useful now.
    { path: 'employees', component: EmployeeList, canActivate: [authGuard] },
    { path: 'employees/:id', component: EmployeeDetails, canActivate: [authGuard] },
    { path: 'departments', component: DepartmentList, canActivate: [authGuard] },
    { path: '**', component: Page404 },
];


// import { Routes } from '@angular/router';

// export const routes: Routes = [];



