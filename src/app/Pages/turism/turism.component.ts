import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turism',
  templateUrl: './turism.component.html',
  styleUrls: ['./turism.component.scss']
})
export class TurismComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  displayAtractii = false;
  displayCazare = false;

  showAtractii() {
    this.displayAtractii = true;
    this.displayCazare = false;
  }
  showCazare() {
    this.displayAtractii = false;
    this.displayCazare = true;
  }

  hideAtractii() {
    this.displayAtractii = false;
    this.displayCazare = false;
  }

  hideCazare() {
    this.displayAtractii = false;
    this.displayCazare = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
