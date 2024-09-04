import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  isOpen: boolean = false;

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }
}
