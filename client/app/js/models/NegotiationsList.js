System.register([], function (exports_1, context_1) {
    "use strict";
    var NegotiationsList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NegotiationsList = class NegotiationsList {
                constructor() {
                    this._negotiations = [];
                }
                add(negotiation) {
                    this._negotiations.push(negotiation);
                }
                toArray() {
                    return [].concat(this._negotiations);
                }
                toLogConsole() {
                    console.log(JSON.stringify(this._negotiations));
                }
                equals(o) {
                    return JSON.stringify(this._negotiations) == JSON.stringify(o.toArray());
                }
            };
            exports_1("NegotiationsList", NegotiationsList);
        }
    };
});
