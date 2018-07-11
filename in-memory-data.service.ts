import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() {
  }

  createDb() {
    const people = {uid: 1, username: 'Mr. Nice', introduction: 'Hello'};

    return {people};
  }
}
