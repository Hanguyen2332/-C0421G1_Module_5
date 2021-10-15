import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosition} from "../model/iposition";
import {ILocation} from "../model/ilocation";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private api_url  = "http://localhost:8080//location"

  constructor(private http: HttpClient) { }

  getAll():Observable<ILocation[]|any> {
    return  this.http.get(this.api_url)
  }
}
