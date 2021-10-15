import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../model/icustomer";
import {IEmployee} from "../model/iemployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api_url  = "http://localhost:3000/employees"

  constructor(private http: HttpClient) { }

  getAll():Observable<IEmployee[]|any> {
    return  this.http.get(this.api_url)
  }

  //create
  createNew(object: IEmployee):Observable<IEmployee|any> {
    return this.http.post(this.api_url,object);
  }
  //findById
  findById(id:number):Observable<IEmployee|any> {
    return this.http.get(`${this.api_url}/${id}`)
  }
  //edit
  edit(id:number,object: IEmployee):Observable<IEmployee|any> {
    return this.http.patch(`${this.api_url}/${id}`,object);
  }
  //delete
  delete(id:number):Observable<IEmployee|any> {
    return this.http.delete(`${this.api_url}/${id}`);
  }
}
