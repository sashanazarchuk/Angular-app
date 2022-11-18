import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  username: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(
        null,
        [Validators.required]
      )

    })
  }

  sendUser(): void {
    this.username = this.searchForm.value.username;
    this.route.navigate([`users/${this.username}`]);
  }

}
