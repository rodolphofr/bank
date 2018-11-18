import { BootstrapAlertMessageType } from "./BootstrapAlertMessageType";

export class Message {

    constructor(
        readonly text: string, 
        readonly alert: BootstrapAlertMessageType = BootstrapAlertMessageType.INFO
    ) {}

}