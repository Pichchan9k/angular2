import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {
  @Input('user')
  selectedUser

  constructor() {
   }

  ngOnInit() {
    
  }

  checkAge(){
    if (this.selectedUser.isOld()){
      alert('You are quite old!')
    } else {
      alert('You age is fine.')
    }
  }

  checkHelth(){
    if (this.selectedUser.isHealth()){
      alert('You are healthy')
    } else {
      alert('You are not healthy')
    }
  }

}
