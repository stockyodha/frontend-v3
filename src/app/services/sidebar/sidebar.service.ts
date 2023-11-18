import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _isOpen: boolean = false;

  constructor() {}

  get isOpen(): boolean {
    return this._isOpen;
  }

  toggleOpen(open: boolean): void {
    this._isOpen = open;
  }
}
