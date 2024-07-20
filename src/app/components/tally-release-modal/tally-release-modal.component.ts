import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tally-release-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tally-release-modal.component.html',
  styleUrl: './tally-release-modal.component.css'
})
export class TallyReleaseModalComponent implements OnChanges {
  @Input() isEdit: any
  @Input() editData: any

  tallyReleaseForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    downloadLink: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
    updateLink: new FormControl('', [Validators.required, Validators.pattern('https?://.+')])
  })


  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit == true) {
      this.tallyReleaseForm.setValue({
        fullName: this.editData['Version Name'],
        downloadLink: this.editData["Download Link"],
        updateLink: this.editData["Update Link"],
      })
    }
    else if (this.isEdit == false) {
      this.resetForm()
    }
  }



  onSubmit(): void {
    if (this.tallyReleaseForm.valid) {
      console.log(this.tallyReleaseForm.value);
      this.resetForm()
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {

    this.tallyReleaseForm.reset({
      fullName: '',
      downloadLink: '',
      updateLink: '',

    })
  }
}
