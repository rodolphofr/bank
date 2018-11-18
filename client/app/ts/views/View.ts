// declare var $: any; => ps: use typescript definitions: tsd file
import { logExecutionTime } from "../helpers/decorators/logExecutionTime";

export abstract class View<T> {

    private _element: JQuery;
    private _escape: boolean;
    private static readonly REGEX_TAG_SCRIPT = /<script>.*<\/script>/g;

    constructor(selector: string, escape: boolean = false) {
        this._element = $(selector);
        this._escape = escape;
    }

    @logExecutionTime(false)
    update(model: T): void {

        let template: string = this.template(model);

        if (this._escape)
            template = template.replace(View.REGEX_TAG_SCRIPT, '');

        this._element.html(template);

    }

    abstract template(model: T): string;

}