import { Component, OnInit, Input } from '@angular/core';
import  atractii  from '../../../assets/Data-json/atractii.json';

@Component({
  selector: 'app-turism-atractii',
  templateUrl: './turism-atractii.component.html',
  styleUrls: ['./turism-atractii.component.scss']
})
export class TurismAtractiiComponent implements OnInit {

  @Input() public Atractii: {id: number, title: string, imageURL: string, text: string}[] = atractii;

  constructor() { }

  ngOnInit(): void {
  }

}
