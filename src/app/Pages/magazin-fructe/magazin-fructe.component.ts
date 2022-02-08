import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazin-fructe',
  templateUrl: './magazin-fructe.component.html',
  styleUrls: ['./magazin-fructe.component.scss']
})
export class MagazinFructeComponent implements OnInit {

  displayFructe = false;
  displayTEL = false;

  showDespreFructe() {
    this.displayFructe = true;
  }
  hideDespreFructe() {
    this.displayFructe = false;
  }

  constructor() { }

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (innerWidth < 800) {
      this.displayTEL = true;
    }
    else { this.displayTEL = false; }
  }

}
