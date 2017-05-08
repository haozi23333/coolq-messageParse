"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MessageBaseA_1 = require("../MessageBaseA");
/**
 * Created by haozi on 5/8/2017.
 */
var textMessage = (function (_super) {
    __extends(textMessage, _super);
    function textMessage() {
        return _super.call(this) || this;
    }
    textMessage.prototype.parse = function (message) {
        return this;
    };
    textMessage.prototype.toString = function () {
        return "";
    };
    return textMessage;
}(MessageBaseA_1.MessageBaseA));
textMessage.type = "2333";
exports.textMessage = textMessage;
