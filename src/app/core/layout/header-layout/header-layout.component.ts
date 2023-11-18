import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
})
export class HeaderLayoutComponent {
  constructor(public sidebarService: SidebarService) {}
}
