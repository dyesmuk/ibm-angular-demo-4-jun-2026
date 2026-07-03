import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = 'Sonu';

  user = { email: 'sonu@ibm.com', password: 'sonu123' };

}



