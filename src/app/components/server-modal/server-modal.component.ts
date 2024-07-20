import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-server-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './server-modal.component.html',
  styleUrl: './server-modal.component.css'
})
export class ServerModalComponent implements OnChanges {

  @Input() isEdit!: any
  @Input() editData!: any
  serverForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    ipAddress: new FormControl('', [Validators.required, Validators.pattern(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)]),
    publicIpAddress: new FormControl('', [Validators.required, Validators.pattern(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)]),
    domainName: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/)]),
    port: new FormControl('', [Validators.required, Validators.min(1), Validators.max(65535)]),
    exe: new FormControl('', Validators.required),
    description: new FormControl(''),
    serverType: new FormControl('', Validators.required)
  })


  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEdit == true) {
      this.serverForm.setValue({
        fullName: this.editData.Name,
        ipAddress: this.editData["IP Address"],
        publicIpAddress: this.editData["Public IP Address"],
        domainName: this.editData["Domain Name"],
        port: '80',
        exe: '',
        description: '',
        serverType: this.editData["Type"]
      })
    }
    else if (this.isEdit == false) {
      this.resetForm()
    }
  }



  onSubmit(): void {
    if (this.serverForm.valid) {
      console.log(this.serverForm.value);
      this.resetForm()
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {

    this.serverForm.reset({
      fullName: '',
      ipAddress: '',
      publicIpAddress: '',
      domainName: '',
      port: '',
      exe: '',
      description: '',
      serverType: ''
    })
  }
}
