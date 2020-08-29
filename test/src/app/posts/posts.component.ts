import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  // lifecylce hooks -> OnInit OnChanges DoCheck AfterContentInit

  ngOnInit(): void {
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // constructor should be light-weight so we shouldn't perform heavy operations inside them

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value.length > 0 &&
      this.service.createPost(post).subscribe((res) => {
        post['id'] = res['id'];
        this.posts.splice(0, 0, post);
      });
    input.value = '';
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe((res) => {
      console.log(res);
    });
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe((res) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
