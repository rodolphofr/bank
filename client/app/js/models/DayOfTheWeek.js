System.register([], function (exports_1, context_1) {
    "use strict";
    var DayOfTheWeek;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (DayOfTheWeek) {
                DayOfTheWeek[DayOfTheWeek["Sunday"] = 0] = "Sunday";
                DayOfTheWeek[DayOfTheWeek["Monday"] = 1] = "Monday";
                DayOfTheWeek[DayOfTheWeek["Tuesday"] = 2] = "Tuesday";
                DayOfTheWeek[DayOfTheWeek["Wednesday"] = 3] = "Wednesday";
                DayOfTheWeek[DayOfTheWeek["Thursday"] = 4] = "Thursday";
                DayOfTheWeek[DayOfTheWeek["Friday"] = 5] = "Friday";
                DayOfTheWeek[DayOfTheWeek["Saturday"] = 6] = "Saturday";
            })(DayOfTheWeek || (DayOfTheWeek = {}));
            exports_1("DayOfTheWeek", DayOfTheWeek);
        }
    };
});
