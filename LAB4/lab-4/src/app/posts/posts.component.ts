import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './../Services/posts.service';
import { IPost } from './../Shared Classes and types/sct';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostsService, private router: Router) {}
  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  viewComments(post: IPost) {
    this.router.navigate(['/comments', post.id]);
  }
}
