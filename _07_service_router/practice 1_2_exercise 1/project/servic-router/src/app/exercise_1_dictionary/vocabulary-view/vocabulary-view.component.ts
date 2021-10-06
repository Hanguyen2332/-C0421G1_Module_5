import {Component, OnInit} from '@angular/core';
import {IVocabulary} from "../model/ivocabulary";
import {VocabularyServiceService} from "../service/vocabulary-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-vocabulary-view',
  templateUrl: './vocabulary-view.component.html',
  styleUrls: ['./vocabulary-view.component.css']
})
export class VocabularyViewComponent implements OnInit {
  word: any;

  constructor(private vocabularyService: VocabularyServiceService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const  id = paramMap.get('id');
      this.word = vocabularyService.findById(id);  //đổi kiểu dữ liệu id --> string + service: finById (id: String | null)
    })
  }

  ngOnInit(): void {
  }

}
