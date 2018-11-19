System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/index", "../helpers/Utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, index_2, index_3, index_4, Utils_1, NegotiationController;
    var __moduleName = context_1 && context_1.id;
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
            },
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
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
                    Utils_1.print(negotiation, this._negotiationsList);
                }
                import() {
                    return __awaiter(this, void 0, void 0, function* () {
                        function isOk(response) {
                            if (response.ok)
                                return response;
                            throw new Error('Fail to import negotations.');
                        }
                        try {
                            const imported = yield this._service.importNegotiations(isOk);
                            const alreadyImported = this._negotiationsList.toArray();
                            const news = imported.filter(negotiation => !alreadyImported.some(n => n.equals(negotiation)));
                            if (news.length) {
                                news.forEach(negotiation => this._negotiationsList.add(negotiation));
                                this._negotiationsListView.update(this._negotiationsList);
                            }
                        }
                        catch (error) {
                            this._messageView.update(new index_1.Message(error.message, index_1.BootstrapAlertMessageType.DANGER));
                        }
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
