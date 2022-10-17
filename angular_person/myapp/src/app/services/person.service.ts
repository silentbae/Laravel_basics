import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private _url = 'http://127.0.0.1:8000/api/persondetails';


  constructor( private httpClient: HttpClient) { }
  // list() : Observable <IPerson[]>{
  //   return this.http.get<IPerson[]>(this._url);
  // }
  list(){
    return this.httpClient.get(this._url);
  }
}
