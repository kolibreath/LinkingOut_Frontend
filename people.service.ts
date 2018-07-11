import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {People} from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleUrl = 'api/people';
  constructor(
    private http: HttpClient) {}
    getPeople(): Observable<People> {
    return this.http.get<People>(this.peopleUrl);
    }
}
