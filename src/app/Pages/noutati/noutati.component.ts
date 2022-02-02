import { Component, OnInit, Input, } from '@angular/core';
import  news  from '../../../assets/Data-json/news.json';

@Component({
  selector: 'app-noutati',
  templateUrl: './noutati.component.html',
  styleUrls: ['./noutati.component.scss']
})

export class NoutatiComponent implements OnInit {

  @Input() public newsList: {id: number, title: string, content: string, facebookURL: string, date: string, displayNews: boolean}[] = news;

  inchide = '<span class="material-icons">close</span>'

  toggleContent(index: number) {
    this.newsList[index].displayNews = !this.newsList[index].displayNews;


  }

  constructor() { }

  ngOnInit(): void {
  }

}

