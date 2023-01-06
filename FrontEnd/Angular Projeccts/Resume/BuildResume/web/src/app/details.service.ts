import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ts from 'src/app/type';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  count: any;
  employeeData: object = {};
  constructor(private _http: HttpClient) { }
      
  link: string = 'http://localhost:3700/';
  fetchData(): Observable<ts> {
    return this._http.get<ts>(`${this.link}get-data`);
  }

  onCreate(candidateDetails: ts) {
    console.log(candidateDetails);
    return this._http.post(`${this.link}create-user`, candidateDetails);
  }


}