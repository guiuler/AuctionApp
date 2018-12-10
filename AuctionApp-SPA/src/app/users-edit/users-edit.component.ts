import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { DeactivateUserComponent } from '../deactivate-user/deactivate-user.component';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService,
    private deactivateUser: DeactivateUserComponent) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  deactivate() {
    this.deactivateUser.deactivate(this.authService.decodedToken.nameid);
  }

  convertStatusToText(status: boolean): string {
    if (status) {
      return 'Sim';
    } else {
      return 'Não';
    }
  }

}
