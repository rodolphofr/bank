System.register(["../helpers/decorators/logExecutionTime"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var logExecutionTime_1, View;
    return {
        setters: [
            function (logExecutionTime_1_1) {
                logExecutionTime_1 = logExecutionTime_1_1;
            }
        ],
        execute: function () {
            View = class View {
                constructor(selector, escape = false) {
                    this._element = $(selector);
                    this._escape = escape;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escape)
                        template = template.replace(View.REGEX_TAG_SCRIPT, '');
                    this._element.html(template);
                }
            };
            View.REGEX_TAG_SCRIPT = /<script>.*<\/script>/g;
            __decorate([
                logExecutionTime_1.logExecutionTime(false)
            ], View.prototype, "update", null);
            exports_1("View", View);
        }
    };
});
