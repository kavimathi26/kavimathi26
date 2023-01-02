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

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import ts from 'src/app/type';

// @Injectable({
//   providedIn: 'root'
// })
// export class DetailsService {
//   count: any;
//   employeeData: object = {};
//   constructor(private _http: HttpClient) { }
      
//   link: string = 'http://localhost:3700/';
//   fetchData(): Observable<ts> {
//     return this._http.get<ts>(this.link);
//   }

//   onCreate(candidateDetails: ts) {
//     return this._http.post(this.link, candidateDetails);
//   }


// }


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { BASE_URL } from 'src/constant/constant';
// import ts from 'src/app/type/types';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(private _http:HttpClient) { }
  
//   createUser(userData: ts) {
//     return this._http.post(`${BASE_URL}create`, userData); 
//   }

//   fetchDetails(): Observable<ts> {
//     return this._http.get<ts>(`${BASE_URL}`);
//   }

// }