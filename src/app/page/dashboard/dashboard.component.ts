import { Component } from '@angular/core';
import { CoreModule } from "../../core/core.module";

@Component({
    selector: 'app-dashboard',
    template: `<app-header-layout></app-header-layout>`,
    standalone: true,
    imports: [CoreModule]
})
export class DashboardComponent {
  constructor() {}
}
