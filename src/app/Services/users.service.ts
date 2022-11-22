import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../post/post';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  GetAllUsers(username: string) {
    return this.http.get(this.url + username);
  }

  createPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>('https://jsonplaceholder.typicode.com/posts', post);
  }
}