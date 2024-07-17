import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-reseller',
  standalone: true,
  imports: [ReactiveFormsModule, SidebarComponent, NavbarComponent],
  templateUrl: './add-reseller.component.html',
  styleUrl: './add-reseller.component.css'
})
export class AddResellerComponent {
  addResellerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    partnerTypes: new FormControl('', Validators.required),
    accountManager: new FormControl('', Validators.required),
    minOrderLimit: new FormControl(50000, [Validators.required, Validators.min(0)]),
    maxTrialLimit: new FormControl(3, [Validators.required, Validators.min(0)]),
    country: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zone: new FormControl(''),
    category: new FormControl(''),
    pipedriveDealUrl: new FormControl(''),
    proactive: new FormControl(''),
    teamSizeSales: new FormControl('', [Validators.required, Validators.min(0)]),
    teamSizeSupport: new FormControl('', [Validators.required, Validators.min(0)]),
    selectPlan: new FormControl('', Validators.required)
  });


  onSubmit() {
    if (this.addResellerForm.valid) {
      console.log(this.addResellerForm.value);
    }
  }
}
