System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, NegotiationController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiationsList = new index_1.NegotiationsList();
                    this._negotiationsListView = new index_2.NegotiationsListView('#negotiationsList');
                    this._messageView = new index_2.MessageView('#mensagemView');
                    this._service = new index_4.NegotiationService();
                    this._negotiationsListView.update(this._negotiationsList);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new index_1.Negotiation(new Date(this._inputDate.val().replace(/-/, '/')), parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
                    if (!negotiation.isBusinessDay()) {
                        this._messageView.update(new index_1.Message('Selecione um dia util.'));
                        return;
                    }
                    this._negotiationsList.add(negotiation);
                    this._negotiationsListView.update(this._negotiationsList);
                    this._messageView.update(new index_1.Message('Negociacao adicionada com sucesso.', index_1.BootstrapAlertMessageType.SUCCESS));
                }
                import() {
                    function isOk(response) {
                        if (response.ok)
                            return response;
                        throw new Error('Failt to import negotations.');
                    }
                    this._service.importNegotiations(isOk)
                        .then(negotiations => {
                        negotiations.forEach(n => this._negotiationsList.add(n));
                        this._negotiationsListView.update(this._negotiationsList);
                    });
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegotiationController.prototype, "_inputAmount", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle(500)
            ], NegotiationController.prototype, "import", null);
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
