import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDivision} from "../model/idivision";
import {IEduDegree} from "../model/iedu-degree";

@Injectable({
  providedIn: 'root'
})
export class EduDegreeService {
  private api_url  = "http://localhost:3000/eduDegree"

  constructor(private http: HttpClient) { }

  getAll():Observable<IEduDegree[]|any> {
    return  this.http.get(this.api_url)
  }
}
