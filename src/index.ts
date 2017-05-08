/**
 * Created by haozi on 5/8/2017.
 */
import {parseMessage} from './parseMessage'
import {textMessage} from './Message/textMessage'

const messageParse = parseMessage.parse.bind(parseMessage)

export {
    messageParse,
    textMessage
}