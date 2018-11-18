System.register(["./BootstrapAlertMessageType"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BootstrapAlertMessageType_1, Message;
    return {
        setters: [
            function (BootstrapAlertMessageType_1_1) {
                BootstrapAlertMessageType_1 = BootstrapAlertMessageType_1_1;
            }
        ],
        execute: function () {
            Message = class Message {
                constructor(text, alert = BootstrapAlertMessageType_1.BootstrapAlertMessageType.INFO) {
                    this.text = text;
                    this.alert = alert;
                }
            };
            exports_1("Message", Message);
        }
    };
});
