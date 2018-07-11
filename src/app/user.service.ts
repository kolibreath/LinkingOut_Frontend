import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as http from '@angular/common/http';
import {User} from './User';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//the return type of the UserService
export class UserService {


  user = new User();
  private onlineUrl = "http://localhost:8888/login";

  //todo to verify
  //这里的命名规则要和返回的数据中的相同
  private memoryUrl = "api/users";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  loginUser(user: User): Observable<User> {
    //todo login url
    const form = new FormData();
    form.append('tel',user.tel);
    form.append('password',user.password);
    return this.http.post<User>(this.memoryUrl,
      this.user);
  }


  registerUser (user: User): Observable<User> {

    //todo register url
    //todo alter the id!
    let u = {
      id: 1,
      tel: user.tel,
      password: user.password
    };

    const form = new FormData();
    form.append('username',user.username);
    form.append('email',user.email);
    form.append('tel',user.tel);
    form.append('password',user.password);

    return this.http.post<User>(this.memoryUrl
        ,form);
  }

  // getCaptcha(): Observable<> {
  //   return this.http.get<string>
  // }



}
