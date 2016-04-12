import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Utils} from './utils';

@Component({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [Utils],
  viewProviders: [HTTP_PROVIDERS],
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
  constructor(public http: Http, public utils: Utils) {
  }

  newPost(form) {
    this.http.put('/posts', this.utils.params(form.value.newPost), this.utils.headers.www) 
      .subscribe(
        res => res.json(),
        error => console.log(error)
      );
  }
}
