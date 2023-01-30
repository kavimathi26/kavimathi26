import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  count: any;
  employeeData: object = {};
  constructor(private _http: HttpClient) { }

  user_id: any = ' ';
  name: string = ' ';
  email: string = ' ';
  job_role: string = ' ';


  link: string = 'http://localhost:3700/employees/';
  fetchData(): Observable<any> {
    return this._http.get(this.link);
  }

  onCreate(employeeDetails: object) {
    return this._http.post(this.link, employeeDetails);
  }

  fetchGet1(user_id: string) {
    return this._http.get(this.link + `${user_id}`);
  }

  fetchUpdate(employeeDetails: object, user_id: string): Observable<any> {
    return this._http.put(this.link + user_id + '/update', employeeDetails);
  }

  fetchDelete(employeeDetails: object,user_id: string) {
    return this._http.delete<object>(this.link + user_id + '/delete',employeeDetails);
  }

  setUserData(data: object) {
    return this.employeeData = data;
  }

}
