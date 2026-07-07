import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page404',
  imports: [],
  templateUrl: './page404.html',
  styleUrl: './page404.css',
})
export class Page404 {

  private apiUrl: string = 'https://dummyjson.com/quotes/random';
  private http = inject(HttpClient);
  quote = signal<string>('');

  ngOnInit() {
    console.log('ngOnInit');
    this.http
      .get<{ id: number; quote: string; author: string }>(this.apiUrl)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.quote.set(response.quote);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page404',
//   imports: [],
//   templateUrl: './page404.html',
//   styleUrl: './page404.css',
// })
// export class Page404 {}
