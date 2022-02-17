import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Contact } from '../../contact';
import { User } from './user';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  postId: any;
  url = "http://localhost:8080/User"

  name = "";
  email = "";
  text = "";


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: Contact) {

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


    this.http.post<any>(this.url, data, config).subscribe(data1 => {
      data1 = data;

  })
  this.router.navigate(['/']);
  }
}
