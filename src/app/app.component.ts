import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe';

  constructor(private auth: AuthService) {
    this.test();
  }

  async test() {
    const res = await this.auth.checkUsername('test')
    console.log(res);
  }
}
