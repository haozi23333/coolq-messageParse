/**
 * Created by haozi on 5/8/2017.
 */
export abstract class MessageBaseA {
    abstract toString (): string

    abstract parse (message: string[]): this

    static type: string
}
