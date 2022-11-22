import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { IPost } from '../post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // postForm = this.fb.group({
  //   id:[0],
  //   product: [''],
  //   price: [0],
  //   category: [''],
  //   country: ['']
  // });

  postForm: FormGroup = new FormGroup({
    product: new FormControl('',Validators.minLength(5)),
    price: new FormControl(0, Validators.min(1)),
    category: new FormControl('', Validators.minLength(5)),
    country: new FormControl('', Validators.minLength(3))

  });
  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
  }
  createPost(): void {

    if (this.postForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const post: IPost = this.postForm.value;
    this.userService.createPost(post).subscribe(result => {
      console.log(result);
      alert("Operation completed!");
    },
      error => console.log(error));

  }
}