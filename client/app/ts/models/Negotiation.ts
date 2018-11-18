import { DayOfTheWeek } from "./DayOfTheWeek";

export class Negotiation {

    /* only getters */
    constructor(
        readonly date: Date, 
        readonly amount: number, 
        readonly value: number
    ) {}

    get volume(): number {
        return this.amount * this.value;
    }

    public isBusinessDay(): boolean {
        const day = this.date.getDay();
        return day > DayOfTheWeek.Sunday && day < DayOfTheWeek.Saturday;
    }
    
}