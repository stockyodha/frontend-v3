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
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }

  async onLogin() {
    const result = await this.authService.login(this.username, this.password);
    console.log('login result is this ', result);
    if (result) {
      window.location.href = '/dashboard/home';
      this.router.navigate(['/dashboard/home']);
    }
  }
}
