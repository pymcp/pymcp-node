// Miscellaneous utilities
System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Utils;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Utils = (function () {
                function Utils() {
                    // Super easy access to different types of headers
                    this.headers = {
                        www: { headers: new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
                    };
                }
                // Convert an object to url encoded parameters. I couldn't find how to do this in Angular2
                Utils.prototype.params = function (o) {
                    var data = [];
                    for (var key in o) {
                        var value = o[key];
                        value = value ? encodeURIComponent(value) : '';
                        data.push(key + '=' + value);
                    }
                    return data.join('&');
                };
                Utils = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Utils);
                return Utils;
            }());
            exports_1("Utils", Utils);
        }
    }
});
//# sourceMappingURL=utils.js.map