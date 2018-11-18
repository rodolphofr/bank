export class  BootstrapAlertMessageType {

    private _type: string;

    static readonly SUCCESS: BootstrapAlertMessageType = new BootstrapAlertMessageType('success');
    static readonly DANGER: BootstrapAlertMessageType = new BootstrapAlertMessageType('danger');
    static readonly INFO: BootstrapAlertMessageType = new BootstrapAlertMessageType('info');
    static readonly WARNING: BootstrapAlertMessageType = new BootstrapAlertMessageType('warning');

    private constructor(type: string) {
        this._type = `alert-${type}`;
    }

    get type(): string {
        return this._type;
    }

}