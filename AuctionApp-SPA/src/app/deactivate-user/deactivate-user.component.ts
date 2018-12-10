import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deactivate-user',
  templateUrl: './deactivate-user.component.html',
  styleUrls: ['./deactivate-user.component.css']
})
export class DeactivateUserComponent implements OnInit {
  user: User;
  constructor(private alertify: AlertifyService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  deactivate(id) {
    this.alertify.confirm('Ao desativar sua conta, você não poderá reativa-la. Deseja continuar?', () => {
      this.userService.deactivateUser(id);
      this.router.navigate(['/home']);
      localStorage.removeItem('token');
      this.alertify.success('Usuário desativado');
    });
  }

}
