/* from barrels */
import { Negotiation, NegotiationsList, Message, BootstrapAlertMessageType } from "../models/index";
import { MessageView, NegotiationsListView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegotiationService } from "../services/index";
import { print } from "../helpers/Utils";

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

        print(negotiation, this._negotiationsList);

    }

    @throttle(500)
    async import() {

        function isOk(response: Response) {

            if (response.ok)
                return response;
            
            throw new Error('Fail to import negotations.');

        }

        try {
            
            const imported = await this._service.importNegotiations(isOk)
            const alreadyImported = this._negotiationsList.toArray();
    
            const news = imported.filter(negotiation => !alreadyImported.some(n => n.equals(negotiation)));
                    
            if (news.length) {
                news.forEach(negotiation => this._negotiationsList.add(negotiation));
                this._negotiationsListView.update(this._negotiationsList);
            }

        } catch (error) {
            
            this._messageView.update(new Message(error.message, BootstrapAlertMessageType.DANGER));

        }

    }

}