import { Negotiation } from "./Negotiation";

export class NegotiationsList {
    
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation):void {
        this._negotiations.push(negotiation);
    }

    toArray(): Negotiation[] {
        return ( [] as Negotiation[] ).concat(this._negotiations);
    }

 }