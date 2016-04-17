System.register(['angular2/router', 'angular2/core', 'angular2/http', './utils', './post.service'], function(exports_1, context_1) {
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
    var router_1, core_1, http_1, utils_1, post_service_1;
    var PostsComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(http, _router, utils, _postService) {
                    this.http = http;
                    this._router = _router;
                    this.utils = utils;
                    this._postService = _postService;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.getPosts();
                };
                PostsComponent.prototype.getPosts = function () {
                    var _this = this;
                    this._postService.getPosts().subscribe(function (res) { return _this.posts = res.json(); }, function (error) { return console.log(error); });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        template: "\n    <article *ngFor=\"#post of posts\">\n      <h1>{{post.subject}}</h1>\n      <small>test</small>\n      <p>\n        {{post.message}}\n      </p>\n    </article>\n  "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, utils_1.Utils, post_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map