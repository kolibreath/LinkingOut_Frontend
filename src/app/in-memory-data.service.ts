import {InMemoryDbService} from 'angular-in-memory-web-api';
import {User} from './User';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let users: User[]  = [
      {
        id:1,
        tel: "1212",
        password: "121212"
      }
    ];
    // user must be wrapped in {}
    return {users} ;
  }
}
