System.register(['angular2/router', 'angular2/core', './new-post.component', './posts.component', './utils', 'angular2/http', './post.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, new_post_component_1, posts_component_1, utils_1, http_1, post_service_1;
    var AppComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_post_component_1_1) {
                new_post_component_1 = new_post_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pymcp-app',
                        template: '<router-outlet></router-outlet>',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            utils_1.Utils,
                            post_service_1.PostService,
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Posts',
                            component: posts_component_1.PostsComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/new-post',
                            name: 'New Post',
                            component: new_post_component_1.NewPostComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map