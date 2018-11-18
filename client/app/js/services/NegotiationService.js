System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegotiationService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationService = class NegotiationService {
                importNegotiations(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((data) => data.map(partial => new index_1.Negotiation(new Date(), partial.montante, partial.vezes)));
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
