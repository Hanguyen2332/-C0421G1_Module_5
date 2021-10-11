import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {XuatChieu} from "../model/xuat-chieu";

@Injectable({
  providedIn: 'root'
})
export class XuatChieuService {
  private api_url  = "http://localhost:3000/xuatChieu"

  constructor(private http: HttpClient) { }

  getAll():Observable<XuatChieu[]|any> {
    return  this.http.get(this.api_url)
  }

  //create
  createNew(customer: XuatChieu):Observable<XuatChieu|any> {
    return this.http.post(this.api_url,customer);
  }
  //findById
  findById(id:number):Observable<XuatChieu|any> {
    return this.http.get(`${this.api_url}/${id}`)
  }
  //edit
  edit(id:number,customer: XuatChieu):Observable<XuatChieu|any> {
    return this.http.patch(`${this.api_url}/${id}`,customer);
  }
  //delete
  delete(id:number):Observable<XuatChieu|any> {
    return this.http.delete(`${this.api_url}/${id}`);
  }
}
