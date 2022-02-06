import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joburi',
  templateUrl: './joburi.component.html',
  styleUrls: ['./joburi.component.scss']
})
export class JoburiComponent implements OnInit {
  displayCOO = false;
  displaySMM = false;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  showCOO() {
    this.displayCOO = true;
    this.displaySMM = false;
  }
  showSMM() {
    this.displaySMM = true;
    this.displayCOO = false;
  }
  closeAll() {
    this.displayCOO = false;
    this.displaySMM = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
