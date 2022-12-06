import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../post/post';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  GetAllUsers(username: string) {
    return this.http.get(environment.giturl + username);
  }

  createPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(environment.jsonurl, post);
  }
}