import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Component } from 'angular2/core';
import { NewPostComponent } from './new-post.component';

@Component({
  selector: 'my-app',
  template: '<new-post></new-post>'
})
export class AppComponent {
  title = 'test';
}
