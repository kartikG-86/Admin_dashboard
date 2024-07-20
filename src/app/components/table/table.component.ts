import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServerModalComponent } from '../server-modal/server-modal.component';
import { TallyReleaseModalComponent } from '../tally-release-modal/tally-release-modal.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ServerModalComponent, TallyReleaseModalComponent, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() data: any[] = []
  @Input() columns: any[] = []


  docPerPage = 5
  dataPerPage: any[] = []
  totalPages = 0
  displayPages = 3
  start = 0
  end = 5
  isEditModal = false
  editModalData: any

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.getDocPerPages(0, this.docPerPage)
    this.totalPages = this.data.length
  }

  rowPerPage(type: any) {
    this.docPerPage = Number(type.target.innerHTML);
    this.start = 0;
    this.end = this.docPerPage;
    this.getDocPerPages(this.start, this.end);
  }

  changePage(type: any) {

    if (type === 'left') {

      if (this.start > 0) {
        this.end = this.start;
        this.start = this.start - this.docPerPage;
      }
    } else {

      if (this.dataPerPage.length === this.docPerPage) {
        this.start = this.end;
        this.end = this.start + this.docPerPage;
      }
    }

    // Ensure start and end are within valid range
    this.start = Math.max(0, this.start);
    this.end = Math.min(this.start + this.docPerPage, this.data.length);

    console.log(this.start, this.end);

    this.getDocPerPages(this.start, this.end);

  }

  goToPage(page: string) {
    if (page === 'first') {
      this.start = 0;
      this.end = this.docPerPage;
    } else if (page === 'last') {
      this.end = this.data.length;
      this.start = this.end - this.docPerPage;
      if (this.start < 0) this.start = 0;
    }
    if (page === 'last' && this.data.length % this.docPerPage !== 0) {
      this.start = this.data.length - (this.data.length % this.docPerPage);
      this.end = this.data.length;
    }

    console.log(this.start, this.end);
    this.getDocPerPages(this.start, this.end);
  }

  getData(index: any, type: any) {
    return this.dataPerPage[index][type];
  }

  getDocPerPages(start: any, end: any) {
    this.dataPerPage = this.data.slice(start, end)
  }

  editModal(index: any) {
    this.isEditModal = true
    this.editModalData = this.dataPerPage[index]
  }

}
