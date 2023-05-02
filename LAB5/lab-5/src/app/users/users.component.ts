import { Component, OnInit } from '@angular/core';
import { IUser } from '../Shared Classes and types/sct';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (users: IUser[]) => {
        console.log(users);
        this.users = users;
        console.log("hi from users")
        console.log(this.users);
        },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
