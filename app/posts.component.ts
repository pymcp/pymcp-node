import {Router} from 'angular2/router';
import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Utils} from './utils';

@Component({
  template: `
    <div>These are my posts</div>
  `
})
export class PostsComponent {
  constructor(public http: Http, private _router: Router, public utils: Utils) {
  }
}

