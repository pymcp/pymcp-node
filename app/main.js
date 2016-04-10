System.register(['angular2/platform/browser', './new-post.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, new_post_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (new_post_component_1_1) {
                new_post_component_1 = new_post_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(new_post_component_1.NewPostComponent);
        }
    }
});
//# sourceMappingURL=main.js.map