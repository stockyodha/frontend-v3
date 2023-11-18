import { Component } from '@angular/core';
import { CoreModule } from "../../core/core.module";

@Component({
    selector: 'app-auth',
    template: `<app-full-layout></app-full-layout>`,
    standalone: true,
    imports: [CoreModule]
})
export class AuthComponent {
  constructor() {}
}
