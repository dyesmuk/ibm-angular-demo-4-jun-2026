import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = '';
  salary: number = 90000.50;
  user = { email: 'sonu@ibm.com', password: 'sonu123' };
  isIndian = false;

  fun = () => {
    console.log('fun function called.');
    this.isIndian = !this.isIndian;
  };




}



