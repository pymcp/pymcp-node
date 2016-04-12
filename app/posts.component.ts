import {Router} from 'angular2/router';
import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Utils} from './utils';
import {PostService} from './post.service';

interface Post {
  subject: string;
  message: string;
}

@Component({
  template: `
    <div>These are my posts</div>
    <ul>
      <li *ngFor="#post of posts">{{post.subject}}</li>
    </ul>
  `
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(
    public http: Http,
    private _router: Router,
    public utils: Utils,
    private _postService: PostService
  ) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._postService.getPosts().subscribe(
      res => this.posts = res.json(),
      error => console.log(error)
    );
  }
}

