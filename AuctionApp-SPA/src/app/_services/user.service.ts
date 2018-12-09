import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private route: ActivatedRoute) { }

isAdmin(): boolean {
  this.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
    this.user = user;
  });

  return this.user.isAdministrator;
}

getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'auctions/' + id);
}
}
