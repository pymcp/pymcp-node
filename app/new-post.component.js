System.register(['angular2/router', 'angular2/core', 'angular2/http', 'angular2/common', './utils'], function(exports_1, context_1) {
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
    var router_1, core_1, http_1, common_1, utils_1;
    var NewPostComponent;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            NewPostComponent = (function () {
                function NewPostComponent(http, _router, utils) {
                    this.http = http;
                    this._router = _router;
                    this.utils = utils;
                }
                NewPostComponent.prototype.newPost = function (form) {
                    this.http.put('/posts', this.utils.params(form.value.newPost), this.utils.headers.www)
                        .subscribe(function (res) { return res.json(); }, function (error) { return console.log(error); });
                };
                NewPostComponent = __decorate([
                    core_1.Component({
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        selector: 'new-post',
                        template: "\n    <form #f=\"ngForm\" (submit)=\"newPost(f)\">\n      <div ngControlGroup=\"newPost\">\n        <h1>New Post</h1>\n        <small>Create a new post</small>\n        <input name=\"subject\" ngControl=\"subject\"/>\n        <textarea name=\"message\" ngControl=\"message\"></textarea>\n        <input type=\"submit\" value=\"Post\"/>\n      </div>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, utils_1.Utils])
                ], NewPostComponent);
                return NewPostComponent;
            }());
            exports_1("NewPostComponent", NewPostComponent);
        }
    }
});
//# sourceMappingURL=new-post.component.js.map