import {Component, OnInit} from '@angular/core';

// create interface Article:
export interface Article {
  title?: String;
  url?: String;
  createDate?:Date;
}

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  article:Article = {};
  articleArr: Array<Article> = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
      createDate: new Date("2019-01-16")
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      createDate: new Date("2020-05-11")
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7',
      createDate: new Date("2021-11-07")

    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/',
      createDate: new Date("2019-09-13")
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/',
      createDate: new Date("2020-01-21")
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addArticle(newTitle: string, newUrl: string) {
    this.article = {title:newTitle, url:newUrl,createDate:new Date() };
    this.articleArr.push(this.article)
  }
}
