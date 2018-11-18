System.register(["./DayOfTheWeek"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DayOfTheWeek_1, Negotiation;
    return {
        setters: [
            function (DayOfTheWeek_1_1) {
                DayOfTheWeek_1 = DayOfTheWeek_1_1;
            }
        ],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, amount, value) {
                    this.date = date;
                    this.amount = amount;
                    this.value = value;
                }
                get volume() {
                    return this.amount * this.value;
                }
                isBusinessDay() {
                    const day = this.date.getDay();
                    return day > DayOfTheWeek_1.DayOfTheWeek.Sunday && day < DayOfTheWeek_1.DayOfTheWeek.Saturday;
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
