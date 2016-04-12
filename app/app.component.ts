import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';
import {NewPostComponent} from './new-post.component';
import {Utils} from './utils';

@Component({
  selector: 'pymcp-app',
  template: 'hello <router-outlet></router-outlet>',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    Utils
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Posts',
    component: NewPostComponent,
    useAsDefault: true
  }
])
export class AppComponent implements OnInit {
}
