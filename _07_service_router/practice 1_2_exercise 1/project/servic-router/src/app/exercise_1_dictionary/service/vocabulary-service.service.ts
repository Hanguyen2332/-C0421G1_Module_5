import { Injectable } from '@angular/core';
import {IVocabulary} from "../model/ivocabulary";

@Injectable({
  providedIn: 'root'
})
export class VocabularyServiceService {
  vocabularyList: IVocabulary[];


  constructor() {
    this.vocabularyList = [
      {id: '1', english: "Flower", vietnamese:"Hoa"},
      {id: '2', english: "Dog", vietnamese:"Chó"},
      {id: '3', english: "Cat", vietnamese:"Mèo"},
      {id: '4', english: "Mouse", vietnamese:"Chuột"},
      {id: '5', english: "Tiger", vietnamese:"Hổ"},
      {id: '6', english: "Lion", vietnamese:"Sư tử"}
    ]
  }
  findAll() {
    return this.vocabularyList;
  }
  findById(id:String | null) {
    return this.vocabularyList.find(item => item.id === id);
  }
}
