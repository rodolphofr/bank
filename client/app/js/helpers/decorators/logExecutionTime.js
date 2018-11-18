System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime(inSeconds) {
        return function (target, key, descriptor) {
            const method = descriptor.value;
            let divisor = 1;
            let unit = 'miliseconds';
            if (inSeconds) {
                divisor = 1000;
                unit = 'seconds';
            }
            descriptor.value = function (...args) {
                console.log('--------------------------------');
                const initialTime = performance.now();
                const result = method.apply(this, args);
                const endTime = performance.now();
                console.log(`Method ${key} took ${(endTime - initialTime) / divisor} ${unit} to execute.`);
                return result;
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
