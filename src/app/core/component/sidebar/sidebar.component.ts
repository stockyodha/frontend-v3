import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

const fadeInOutTimeout = 500;
const animations = [
  trigger('fade', [
    transition('void => *', [
      style({
        opacity: '1',
        transform: 'translateX(-250px)',
      }),
      animate(
        '0.5s cubic-bezier(.44,.68,.76,-0.31)',
        style({
          opacity: '1',
          transform: 'translateX(0px)',
        })
      ),
    ]),
    transition('* => void', [
      style({
        opacity: '1',
        transform: 'translateX(0px)',
      }),
      animate(
        '0.5s cubic-bezier(.44,.68,.76,-0.31)',
        style({
          opacity: '0',
          transform: 'translateX(-250px)',
        })
      ),
    ]),
  ]),
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations,
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) {}

  onNavigate() {
    this.sidebarService.toggleOpen(false);
  }
}
