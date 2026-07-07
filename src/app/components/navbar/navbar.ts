import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authService.logoutUser().subscribe({
      next: () => {
        this.authService.clearLogin();
        this.router.navigate(['/home']);
      },
      error: () => {
        this.authService.clearLogin();
        this.router.navigate(['/home']);
      }
    });
  }

}