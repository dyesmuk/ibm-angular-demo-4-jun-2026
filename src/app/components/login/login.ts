import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = 'Sonu';
  salary: number = 90000.50;
  user = { email: 'sonu@ibm.com', password: 'sonu123' };
  isIndian = false;

}



