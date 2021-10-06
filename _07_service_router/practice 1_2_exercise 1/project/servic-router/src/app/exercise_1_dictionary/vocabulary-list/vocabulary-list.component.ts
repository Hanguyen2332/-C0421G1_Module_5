import { Component, OnInit } from '@angular/core';
import {IVocabulary} from "../model/ivocabulary";
import {VocabularyServiceService} from "../service/vocabulary-service.service";

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})
export class VocabularyListComponent implements OnInit {
 vocabularyList: IVocabulary[];

  constructor(private vocabularyService:VocabularyServiceService) {
    this.vocabularyList = vocabularyService.findAll();
  }

  ngOnInit(): void {
  }

}
