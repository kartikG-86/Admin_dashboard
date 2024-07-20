import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddLabelComponent } from '../add-label/add-label.component';
import { ActivatedRoute, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-label',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, AddLabelComponent, CommonModule, FormsModule],
  templateUrl: './manage-label.component.html',
  styleUrl: './manage-label.component.css'
})
export class ManageLabelComponent {
  data: any[] = []
  labelData: any[] = []
  editLabelDetails: any
  labelSearchValue: any
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const encodedData = params['data'];
      this.data = JSON.parse(decodeURIComponent(encodedData));
      console.log(this.data)
    });
    this.labelData = this.data
  }
  newLabel(labelDetails: any) {
    if (labelDetails.index == -1) {
      this.data.push({
        name: labelDetails.labelName,
        backgroundColor: labelDetails.backgroundColor,
        color: labelDetails.color
      })
    }
    else {
      this.data[labelDetails.index].name = labelDetails.labelName
      this.data[labelDetails.index].backgroundColor = labelDetails.backgroundColor
      this.data[labelDetails.index].color = labelDetails.color
    }
    this.labelData = [...this.data]
  }

  editLabel(index: number) {
    const label = this.data[index]
    this.editLabelDetails = {
      name: label.name,
      backgroundColor: label.backgroundColor,
      color: label.color,
      index: index
    }
    console.log(this.editLabelDetails)

  }

  addLabel() {
    this.editLabelDetails = {
      name: '',
      backgroundColor: '',
      color: '',
      index: -1
    }
  }

  onLabelSearch() {
    if (this.labelSearchValue == '') {
      this.labelData = [...this.data]
    }
    else {
      this.labelData = this.data.filter((label) => {
        return label.name.toLowerCase().includes(this.labelSearchValue)
      })
    }
  }
}
