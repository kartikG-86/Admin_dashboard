import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cloud-user',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './cloud-user.component.html',
  styleUrl: './cloud-user.component.css'
})
export class CloudUserComponent {

  data: any[] = []

  constructor() { }

}
