import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  lastKeyStroke = Date.now();
  getStarted: any;
  timer: any | undefined;

  constructor(private userService: UserService, private router: Router) {
    //  delete localStorage.getItem('token');
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
  checkUsername(): void {
    this.status = 'loading';
    // if timer is dirty that means we are still waiting for the last keystroke
    if (this.timer) {
      return;
    }
    // wait for 3 seconds after last keystroke
    if (Date.now() - this.lastKeyStroke < 3000) {
      this.status = 'loading';
      this.timer = setTimeout(() => {
        // clear timeout
        this.timer = undefined;
        this.checkUsername();
      }, 3000);
    }
    console.log('Checking username...', this.username, this.lastKeyStroke);
    this.lastKeyStroke = Date.now();
    if (this.username.length > 0) {
      this.status = 'loading';
      this.userService
        .checkUsername(this.username)
        .then((result: boolean) => {
          this.status = result ? 'available' : 'unavailable';
        });
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
