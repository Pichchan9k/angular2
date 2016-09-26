import { Injectable } from '@angular/core';

import { User } from './user';
@Injectable()
export class UserService {

  private users:Array<User>

  constructor() {
    this.users = [
      new User('Jack', 25, 'jackie', 180, 80),
      new User('Pop', 30, 'jackie', 162, 60),
      new User('Yom', 29, 'jackie', 170, 50),
      new User('Nick', 40, 'jackie', 152, 50),
      new User('Miggie', 45, 'jackie', 166, 70),
    ]
  }
  
  getUsers() {
    return this.users
  }
  
}
