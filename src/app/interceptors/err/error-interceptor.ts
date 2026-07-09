import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      switch (error.status) {

        case 401:
          localStorage.removeItem('token');
          alert('Session expired. Please login again.');
          router.navigate(['/login']);
          break;

        case 403:
          alert('Access denied.');
          break;

        case 404:
          alert('Resource not found.');
          break;

        case 500:
          alert('Internal server error.');
          break;
      }

      return throwError(() => error);
    })

  );
};
// import { HttpInterceptorFn } from '@angular/common/http';

// export const errorInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
