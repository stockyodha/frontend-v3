import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class RegisterComponent {
  status: 'init' | 'loading' | 'available' | 'unavailable' = 'init';
  messages = {
    init: 'get started by typing a username',
    loading: 'checking the doors for another soul',
    available: 'your soul is uniquely yours',
    unavailable: 'this soul is already taken',
  };
  username: string = '';
  private usernameSubject = new Subject<string>();

  constructor(private userService: UserService, private router: Router) {
    this.clearToken();
    this.usernameSubject.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap(username => {
        this.status = 'loading';
        return this.userService.checkUsername(username);
      })
    ).subscribe((result: boolean) => {
      this.status = !result ? 'available' : 'unavailable';
    });
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

  checkUsername(): void {
    if (this.username.length > 0) {
      this.status = 'loading';
      this.usernameSubject.next(this.username);
    } else {
      this.status = 'init';
    }
  }

  onCreateUser(): void {
    if (!(this.status == 'available')) return;
    console.log('Creating user...');
    if (this.username.length > 0) {
      this.status = 'loading';
      this.userService.register(this.username).then((result: any) => {
        console.log(result);
        localStorage.setItem('token', result);
        window.location.href = '/';
      });
    } else {
    }
  }
}
