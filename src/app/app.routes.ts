import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { EmployeeList } from './components/employee-list/employee-list';
import { Page404 } from './components/page404/page404';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home },
    { path: 'employees', component: EmployeeList }, 
    { path: '**', component: Page404 },
];


// import { Routes } from '@angular/router';

// export const routes: Routes = [];


