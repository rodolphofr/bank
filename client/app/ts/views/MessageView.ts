import { View } from "./View";
import { Message, BootstrapAlertMessageType } from "../models/index";

export class MessageView extends View<Message> {

    template(message: Message): string {
        return `<p class='alert ${message.alert.type}'>${message.text}</p>`;
    }

}