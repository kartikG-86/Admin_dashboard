import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  selector: 'app-add-label',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxColorsModule],
  templateUrl: './add-label.component.html',
  styleUrl: './add-label.component.css'
})
export class AddLabelComponent implements OnInit, OnChanges {

  @Output() new_label = new EventEmitter<any>()
  @Input() editDetails: any
  labelPreview: any = {
    name: "",
    color: '',
    backgroundColor: ''
  }

  labelForm = new FormGroup({
    labelName: new FormControl('', Validators.required),
    backgroundColor: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required)
  })

  constructor() {

  }

  ngOnInit(): void {
    this.labelForm.valueChanges.subscribe(value => {
      this.labelPreview.name = value.labelName
      this.labelPreview.color = value.color
      this.labelPreview.backgroundColor = value.backgroundColor
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.editDetails)
    if (changes['editDetails'] && this.editDetails) {
      this.labelForm.setValue({
        labelName: this.editDetails.name,
        backgroundColor: this.editDetails.backgroundColor,
        color: this.editDetails.color
      })
    }
  }


  newLabel() {
    if (this.labelForm.valid) {
      this.new_label.emit({ ...this.labelForm.value, index: this.editDetails.index })
    } else {
      this.labelForm.markAllAsTouched();
    }
  }

}
