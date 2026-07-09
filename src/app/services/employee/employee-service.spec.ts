import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee-service';

describe('EmployeeService', () => {

  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should get all employees', () => {

    const mockResponse: any = {
      employees: [],
      total: 0
    };

    service.getAllEmployees().subscribe(res => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/employees?page=1&limit=10');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

  });

  it('should get employee by id', () => {

    const employee: any = {
      id: '101',
      firstName: 'Vaman'
    };

    service.getEmployeeById('101').subscribe(res => {
      expect(res).toEqual(employee);
    });

    const req = httpMock.expectOne(
      'http://localhost:3000/api/employees/101'
    );

    expect(req.request.method).toBe('GET');

    req.flush(employee);

  });

  it('should create employee', () => {

    const employee: any = {
      firstName: 'Vaman',
      lastName: 'Deshmukh'
    };

    service.createEmployee(employee).subscribe(res => {
      expect(res).toEqual(employee);
    });

    const req = httpMock.expectOne(
      'http://localhost:3000/api/employees'
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(employee);

    req.flush(employee);

  });

  it('should send page, limit, sort and search parameters', () => {

    service.getAllEmployees(
      2,
      20,
      'firstName',
      'vam'
    ).subscribe();

    const req = httpMock.expectOne(
      'http://localhost:3000/api/employees?page=2&limit=20&sortBy=firstName&search=vam'
    );

    expect(req.request.method).toBe('GET');

    req.flush({
      employees: [],
      total: 0
    });

  });

});




// import { TestBed } from '@angular/core/testing';
// import { EmployeeService } from './employee-service';

// describe('EmployeeService', () => {

//   let service: EmployeeService = TestBed.inject(EmployeeService);

//   it('should create the service', () => {
//     expect(service).toBeTruthy();
//   });

// });






















// import { TestBed } from '@angular/core/testing';

// import { EmployeeService } from './employee-service';

// describe('EmployeeService', () => {
//   let service: EmployeeService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(EmployeeService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

