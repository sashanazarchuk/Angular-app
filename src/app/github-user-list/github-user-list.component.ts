import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';


@Component({
  selector: 'app-github-user-list',
  templateUrl: './github-user-list.component.html',
  styleUrls: ['./github-user-list.component.css']
})
export class GithubUserListComponent implements OnInit {
  username: string;
  userDetail: any;
  constructor(private userservices: UsersService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.username = params['id'];
    })

    this.userservices.GetAllUsers(this.username).subscribe({
      next: (data: any = []) => {
        this.userDetail = data;
      }
    })
  }

}
