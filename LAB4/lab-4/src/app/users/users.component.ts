import { Component, OnInit } from '@angular/core';
import { IUser } from '../Shared Classes and types/sct';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  UserList: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log('Received response:', response);
        this.UserList = response;
        console.log('UserList:', this.UserList);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
