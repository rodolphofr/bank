System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function print(...printers) {
        printers.forEach(p => p.toLogConsole());
    }
    exports_1("print", print);
    return {
        setters: [],
        execute: function () {
        }
    };
});
