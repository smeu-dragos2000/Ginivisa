import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  text: string = '';



  constructor() { }

  ngOnInit(): void {

  }

  submitForm() {
    const message = `
      Nume: ${this.name}
      Email: ${this.email}
      Message: ${this.text}`

      if (!this.name || !this.email || !this.text) {
        alert("Completează toate câmpurile")
      }
      else {
        alert(message)
      }
  }

}
