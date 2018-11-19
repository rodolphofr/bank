System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegotiationService;
    var __moduleName = context_1 && context_1.id;
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
                        .then((data) => data.map(partial => new index_1.Negotiation(new Date(), partial.montante, partial.vezes)))
                        .catch(error => {
                        console.log(error);
                        throw new Error('Falhou ao tentar importar negociacoes.');
                    });
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
