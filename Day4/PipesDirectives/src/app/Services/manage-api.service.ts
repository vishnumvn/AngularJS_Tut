import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class ManageAPIService {

  constructor(private http: HttpClient) { }

  baseURL  = 'http://localhost:3000/medicines';

  FindAll(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.baseURL);
  }

  remove(codeNumber): Observable<Medicine> {
    return this.http.delete<Medicine>(this.baseURL + '/' + codeNumber);
  }

  add(values): Observable<Medicine> {
    const headers  =  new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Medicine>(this.baseURL, values, {headers});
  }
}
