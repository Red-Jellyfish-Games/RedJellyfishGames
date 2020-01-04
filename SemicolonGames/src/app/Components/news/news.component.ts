import { Component, OnInit } from '@angular/core';
import { NewsItemsList } from '../../Data/news-items';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsItemsList: Array<any>;


  constructor() {
    this.newsItemsList = NewsItemsList;
  }

  ngOnInit() {
  }

}
