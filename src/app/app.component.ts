import { Component } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // user:User
  selectedUser:User
  users:Array<User>
  isEditMode:Boolean = false

  constructor(userService:UserService){
    this.users = userService.getUsers()
    this.selectedUser = this.users[0]
  }


}
