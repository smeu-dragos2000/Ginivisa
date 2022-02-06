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


  showAtractii() {
    this.displayAtractii = true;
  }

  closeAtractii() {
    this.displayAtractii = false;
  }


  constructor() { }

  ngOnInit(): void {
  }
}
