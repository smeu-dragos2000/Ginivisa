import { Component, OnInit, Input,  ElementRef } from '@angular/core';
import  pachetTuristic  from '../../../assets/Data-json/pachet-turistic.json';


@Component({
  selector: 'app-pachet-turistic',
  templateUrl: './pachet-turistic.component.html',
  styleUrls: ['./pachet-turistic.component.scss']
})
export class PachetTuristicComponent implements OnInit {


  public Ziua = pachetTuristic;





  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  showModal(event: any) {
    // get target ID
   let target = event.target || event.srcElement || event.currentTarget;
   let idAttr = target.attributes.id;
   let id = idAttr.value;

   let elementClick = this.el.nativeElement.parentElement.parentElement;
   let itemModal = elementClick.getElementsByClassName('modal')

   itemModal[id].style.setProperty('display', 'block')
   console.log('open')
 }

 closeModal(event: any) {
   // get target ID
   let target = event.target || event.srcElement || event.currentTarget;
   let idAttr = target.attributes.id;
   let id = idAttr.value;

   let elementClick = this.el.nativeElement.parentElement.parentElement;
   let itemModal = elementClick.getElementsByClassName('modal')

   itemModal[id].style.setProperty('display', 'none')
   console.log('close')
 }

}
