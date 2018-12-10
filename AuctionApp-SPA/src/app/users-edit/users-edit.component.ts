import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService,
     private router: Router) { }

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

    this.alertify.confirm('Ao desativar sua conta, você não poderá reativa-la. Deseja continuar?', () => {
      this.user.isActive = false;
      this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
        this.router.navigate(['/home']);
        localStorage.removeItem('token');
        this.alertify.success('Usuário desativado');
      }, error => {
        this.alertify.error(error);
      });
    });
  }

  convertStatusToText(status: boolean): string {
    if (status) {
      return 'Sim';
    } else {
      return 'Não';
    }
  }

}
