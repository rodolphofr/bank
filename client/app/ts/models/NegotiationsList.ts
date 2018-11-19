import { Negotiation } from "./Negotiation";
import { Printable, Equable } from "./interfaces/index";

export class NegotiationsList implements Printable, Equable<NegotiationsList> {
  
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation):void {
        this._negotiations.push(negotiation);
    }

    toArray(): Negotiation[] {
        return ( [] as Negotiation[] ).concat(this._negotiations);
    }

    toLogConsole(): void {
        console.log(JSON.stringify(this._negotiations));
    }

    equals(o: NegotiationsList): boolean {
        return JSON.stringify(this._negotiations) == JSON.stringify(o.toArray());
    }

 }