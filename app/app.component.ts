import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';
import {NewPostComponent} from './new-post.component';
import {PostsComponent} from './posts.component';
import {Utils} from './utils';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'pymcp-app',
  template: 'hello <router-outlet></router-outlet>',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Utils
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Posts',
    component: PostsComponent,
    useAsDefault: true
  },
  {
    path: '/new-post',
    name: 'New Post',
    component: NewPostComponent
  }
])
export class AppComponent {
}
