import { Negotiation, PartialNegotiation } from "../models/index";
import { HandleFunction } from "./HandleFunction";

export class NegotiationService {

    importNegotiations(handler: HandleFunction): Promise<Negotiation[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((data: PartialNegotiation[]) =>
                data.map(partial => new Negotiation(new Date(), partial.montante, partial.vezes))
            );
        

    }

}