import { Negotiation } from "../models/index";
import { HandleFunction } from "./interfaces/HandleFunction";
import { PartialNegotiation } from "../models/interfaces/index";

export class NegotiationService {

    importNegotiations(handler: HandleFunction): Promise<Negotiation[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((data: PartialNegotiation[]) =>
                data.map(partial => new Negotiation(new Date(), partial.montante, partial.vezes))
            )
            .catch(error => { 
                console.log(error);
                throw new Error('Falhou ao tentar importar negociacoes.');
            });
        

    }

}