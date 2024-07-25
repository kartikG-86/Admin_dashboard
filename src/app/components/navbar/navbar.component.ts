import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkMode = false
  constructor() {
    if (localStorage.getItem('darkMode')) {
      let theme = localStorage.getItem('darkMode')
      this.darkMode = theme ? JSON.parse(theme) : false
    }
    else {
      this.darkMode = false
    }
  }
  isUserProfile = false
  @Output() mode = new EventEmitter<any>()
  changeMode() {
    this.darkMode = !this.darkMode
    this.mode.emit(this.darkMode)
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode))
  }

  showUserProfile() {
    this.isUserProfile = !this.isUserProfile
  }


}
