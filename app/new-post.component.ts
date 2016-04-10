import { Component } from 'angular2/core';

@Component({
  selector: 'new-post',
  template: `
    <article>
      <h1>New Post</h1>
      <small>Create a new post</small>
      <input name="subject"/>
      <textarea name="message"></textarea>
    </article>
  `
})
export class NewPostComponent {
}
