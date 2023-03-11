import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:9393/api";
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getSingleTest(email: string){
    return this.http.get<any>(baseURL+"/single_email/"+email);
  }
}
