System.register([], function (exports_1, context_1) {
    "use strict";
    var BootstrapAlertMessageType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BootstrapAlertMessageType = class BootstrapAlertMessageType {
                constructor(type) {
                    this._type = `alert-${type}`;
                }
                get type() {
                    return this._type;
                }
            };
            BootstrapAlertMessageType.SUCCESS = new BootstrapAlertMessageType('success');
            BootstrapAlertMessageType.DANGER = new BootstrapAlertMessageType('danger');
            BootstrapAlertMessageType.INFO = new BootstrapAlertMessageType('info');
            BootstrapAlertMessageType.WARNING = new BootstrapAlertMessageType('warning');
            exports_1("BootstrapAlertMessageType", BootstrapAlertMessageType);
        }
    };
});
