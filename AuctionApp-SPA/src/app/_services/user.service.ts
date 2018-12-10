import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private route: ActivatedRoute, private alertify: AlertifyService) { }

isAdmin(): boolean {
  this.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
    this.user = user;
  });

  return this.user.isAdministrator;
}

getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

putUser(user: User): Observable<User> {
  return this.http.put<User>(this.baseUrl + 'users/' + user.id, user);
}

deactivateUser(id) {
  this.getUser(id).subscribe((user: User) => {
    this.user = user;
    this.user.isActive = false;
    this.putUser(this.user);
  });
}
}
