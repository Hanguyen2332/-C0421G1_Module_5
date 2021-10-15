import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEduDegree} from "../model/iedu-degree";
import {IPosition} from "../model/iposition";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private api_url  = "http://localhost:3000/position"

  constructor(private http: HttpClient) { }

  getAll():Observable<IPosition[]|any> {
    return  this.http.get(this.api_url)
  }
}
