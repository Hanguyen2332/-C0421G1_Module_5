import { Injectable } from '@angular/core';
import {Movie} from "../model/movie";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private api_url  = "http://localhost:3000/movies"

  constructor(private http: HttpClient) { }

  getAll():Observable<Movie[]|any> {
    return  this.http.get(this.api_url)
  }
}

