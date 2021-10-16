import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BusInfo} from "../model/bus-info";

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private api_url  = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  //getAllPage:
  getAllPage(request:any):Observable<BusInfo[]|any> {
    return  this.http.get(this.api_url + '/list' + request)
  }

  //create
  createNew(object: BusInfo):Observable<BusInfo|any> {
    return this.http.post(this.api_url, object)
  }
  //findById
  findById(id:number):Observable<BusInfo|any> {
    return this.http.get(`${this.api_url}/${id}`)
  }
  //edit
  edit(id:number,object: BusInfo):Observable<BusInfo|any> {
    return this.http.patch(`${this.api_url}/${id}`,object);
  }
  //delete
  delete(id:number):Observable<BusInfo|any> {
    return this.http.delete(`${this.api_url}/${id}`);
  }

  findByKeyWord(name:String,locationId:Number,request:any) :Observable<BusInfo[]|any>{
    return  this.http.get(this.api_url + '/find-by-keyword'+ request)
  }
}
