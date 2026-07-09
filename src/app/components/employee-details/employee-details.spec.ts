import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetails } from './employee-details';
import { provideRouter } from '@angular/router';

TestBed.configureTestingModule({
  imports: [EmployeeDetails], 
  providers: [
    provideRouter([])   
  ]
});
describe('EmployeeDetails', () => {
  let component: EmployeeDetails;
  let fixture: ComponentFixture<EmployeeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
