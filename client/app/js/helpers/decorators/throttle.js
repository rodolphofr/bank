System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(miliseconds) {
        return function (target, key, descriptor) {
            const method = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearTimeout(timer);
                timer = setTimeout(() => method.apply(this, args), miliseconds);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
