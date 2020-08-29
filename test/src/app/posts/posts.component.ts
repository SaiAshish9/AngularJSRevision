import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any;

  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
