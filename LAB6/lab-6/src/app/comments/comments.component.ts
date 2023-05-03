import { Component } from '@angular/core';
import { CommentsService } from './../Services/comments.service';
import { IComment } from './../Shared Classes and types/sct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  comments: IComment[];
  constructor(
    private commentService: CommentsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.commentService.getComments().subscribe(
        (data) => {
          this.comments = data.filter(
            (comment) => comment.postId == params['id']
          );
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
