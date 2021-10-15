import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomerType} from "../model/iCustomerType";
import {IDivision} from "../model/idivision";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private api_url  = "http://localhost:3000/division"

  constructor(private http: HttpClient) { }

  getAll():Observable<IDivision[]|any> {
    return  this.http.get(this.api_url)
  }
}
