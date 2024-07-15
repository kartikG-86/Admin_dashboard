import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reseller',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './reseller.component.html',
  styleUrl: './reseller.component.css'
})
export class ResellerComponent {
  data: any[] = []
  isSearch = false
  constructor() { }

  searchForm = new FormGroup({

  })

  openSearch() {
    this.isSearch = !this.isSearch
  }

  onSubmit() {

  }
}
