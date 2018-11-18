/* from barrels */
import { Negotiation, NegotiationsList, Message, BootstrapAlertMessageType } from "../models/index";
import { MessageView, NegotiationsListView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegotiationService } from "../services/index";

export class NegotiationController {

    @domInject('#data')
    private _inputDate: JQuery;

    @domInject('#quantidade')
    private _inputAmount: JQuery;

    @domInject('#valor')
    private _inputValue: JQuery;

    private _negotiationsList = new NegotiationsList();
    private _negotiationsListView = new NegotiationsListView('#negotiationsList');
    private _messageView = new MessageView('#mensagemView');
    private _service = new NegotiationService();

    constructor() {
        this._negotiationsListView.update(this._negotiationsList);
    }

    add(event: Event): void {

        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/, '/')),
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val())
        );

        if (!negotiation.isBusinessDay()) {
            this._messageView.update(new Message('Selecione um dia util.'));
            return;
        }
            
        this._negotiationsList.add(negotiation);
        this._negotiationsListView.update(this._negotiationsList);
        this._messageView.update(new Message('Negociacao adicionada com sucesso.', BootstrapAlertMessageType.SUCCESS));

    }

    @throttle(500)
    import() {

        function isOk(response: Response) {

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

}