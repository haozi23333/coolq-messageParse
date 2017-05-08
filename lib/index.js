"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by haozi on 5/8/2017.
 */
var parseMessage_1 = require("./parseMessage");
var textMessage_1 = require("./Message/textMessage");
exports.textMessage = textMessage_1.textMessage;
var messageParse = parseMessage_1.parseMessage.parse.bind(parseMessage_1.parseMessage);
exports.messageParse = messageParse;
