import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
})
export class SalaryPipe implements PipeTransform {
  transform(value: number, currency: string = 'INR'): string {
    if (value == null || isNaN(value)) return '';

    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

    return `${formatted}/-`;
  }
}

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'salary',
// })
// export class SalaryPipe implements PipeTransform {
//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }
// }
