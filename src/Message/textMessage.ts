import {MessageBaseA} from "../MessageBaseA";
/**
 * Created by haozi on 5/8/2017.
 */
export class textMessage extends MessageBaseA{
    static type: string = "2333"

    constructor () {
        super()
    }

    parse (message: string[]): this {

        return this
    }


    toString (): string {
        return ""
    }
}