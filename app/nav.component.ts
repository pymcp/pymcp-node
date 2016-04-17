import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'navigation',
  template: `
    <nav>
      <a [routerLink]="['Posts']">Blog</a>
      <a [routerLink]="['New Post']">New Post</a>
    </nav>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class NavComponent {
  constructor() {};
}
