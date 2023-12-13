import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  status: string = 'Enter your username and password';
  constructor(private authService: AuthService, private router: Router) {
    this.clearToken();
  }

  async onLogin() {
    const result = await this.authService.login(this.username, this.password);
    console.log('login result is this ', result);
    if (result) {
      window.location.href = '/dashboard/home';
      this.router.navigate(['/dashboard/home']);
    }
  }

  private clearToken(): void {
    const isTokenSet = localStorage.getItem('token') != null;
    const isRefreshTokenSet = localStorage.getItem('refreshToken') != null;

    if (isTokenSet) {
      localStorage.removeItem('token');
    }
    if (isRefreshTokenSet) {
      localStorage.removeItem('refreshToken');
    }
    if (isTokenSet || isRefreshTokenSet) {
      window.location.reload();
    }
  }
}
