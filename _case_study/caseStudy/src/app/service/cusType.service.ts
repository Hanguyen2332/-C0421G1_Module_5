import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../model/icustomer";
import {ICustomerType} from "../model/iCustomerType";

@Injectable({
  providedIn: 'root'
})

export class CusTypeService {
  private api_url  = "http://localhost:3000/customerTypes"

  constructor(private http: HttpClient) { }

  getAll():Observable<ICustomerType[]|any> {
    return  this.http.get(this.api_url)
  }
}
