import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Employee from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = '/api/employee';
  constructor(private http: HttpClient) {}

  addEmployee(emp: Employee): Observable<any> {
    return this.http.post(this.url, emp);
  }
  getEmployees(): Observable<any> {
    return this.http.get(this.url);
  }
}
