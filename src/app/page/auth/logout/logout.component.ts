import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: '<h1>Logging out...</h1>',
  styleUrls: ['./logout.component.scss'],
  standalone: true
})
export class LogoutComponent {

  ngOnInit() {
    this.clearToken();
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

