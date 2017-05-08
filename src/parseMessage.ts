/**
 * Created by haozi on 5/8/2017.
 */
import {receive} from './messageType'
import * as iconv from 'iconv-lite'
export class parseMessage {
    public static parseMessage (message: string[]){
        message.push(new Buffer(iconv.encode(message.pop(), 'gbk').toString('utf8'), 'base64').toString())
        return message.join(' ')
    }

    public static async parse (ctx: any, next: any) {
        ctx.message = this.parseMessage(ctx.content)
        await next()
    }
}