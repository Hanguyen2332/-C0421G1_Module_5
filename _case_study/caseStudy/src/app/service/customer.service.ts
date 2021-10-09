import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../model/icustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api_url  = "http://localhost:3000/customerList"

  constructor(private http: HttpClient) { }

  getAll():Observable<ICustomer[]|any> {
    return  this.http.get(this.api_url)
  }

  //create
  createNew(customer: ICustomer):Observable<ICustomer|any> {
    return this.http.post(this.api_url,customer);
  }
  //findById
  findById(id:number):Observable<ICustomer|any> {
    return this.http.get(`${this.api_url}/${id}`)
  }
  //edit
  edit(id:number,customer: ICustomer):Observable<ICustomer|any> {
    return this.http.patch(`${this.api_url}/${id}`,customer);
  }
  //delete
  delete(id:number):Observable<ICustomer|any> {
    return this.http.delete(`${this.api_url}/${id}`);
  }
}
