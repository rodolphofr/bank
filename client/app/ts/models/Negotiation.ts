import { DayOfTheWeek } from "./DayOfTheWeek";
import { Printable, Equable } from "./interfaces/index";

export class Negotiation implements Printable, Equable<Negotiation> {
    
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

    toLogConsole(): void {
        console.log(JSON.stringify(this));
    }

    equals(o: Negotiation): boolean {
        return this.date.getDay() == o.date.getDay() &&
               this.date.getMonth() == o.date.getMonth() &&
               this.date.getFullYear() == o.date.getFullYear() &&
               this.amount === o.amount &&
               this.value === o.value &&
               this.volume === o.volume;
    }
    
}