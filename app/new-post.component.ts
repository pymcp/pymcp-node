import {Router} from 'angular2/router';
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {PostService} from './post.service';

@Component({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  selector: 'new-post',
  template: `
    <form #f="ngForm" (submit)="newPost(f)">
      <div ngControlGroup="newPost">
        <h1>New Post</h1>
        <small>Create a new post</small>
        <input name="subject" ngControl="subject"/>
        <textarea name="message" ngControl="message"></textarea>
        <input type="submit" value="Post"/>
      </div>
    </form>
  `
})
export class NewPostComponent {
  constructor(private _router: Router, public postService: PostService) {
  }

  newPost(form) {
    this.postService.post(form.value.newPost.subject, form.value.newPost.message);
  }
}
