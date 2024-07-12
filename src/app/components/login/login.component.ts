import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isForgotPassword: boolean = false
  currentRoute: any

  constructor(public router: Router, public route: ActivatedRoute) {
    if (localStorage.getItem('isToken') == 'true') {
      this.router.navigateByUrl('/dashboard')
      return;
    }

    this.router.events.subscribe((event) => {
      if (event.constructor.name === "NavigationEnd") {
        this.currentRoute = this.router.url;
        this.isForgotPassword = this.currentRoute.includes('forgotPassword') ? true : false
      }
    });
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    isRemember: new FormControl(false)
  })

  onSubmit() {
    localStorage.setItem('isToken', this.isForgotPassword ? 'false' : 'true')
    console.log(this.loginForm.value)
    if (!this.isForgotPassword) {
      this.router.navigateByUrl('/dashboard')
    }
  }
}
