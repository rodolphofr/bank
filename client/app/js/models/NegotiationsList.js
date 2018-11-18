System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegotiationsList;
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
            };
            exports_1("NegotiationsList", NegotiationsList);
        }
    };
});
