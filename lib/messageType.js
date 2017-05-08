/**
 * Created by haozi on 5/8/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var receive;
(function (receive) {
    /**
     *  私聊信息
     */
    receive[receive["PrivateMessage"] = 0] = "PrivateMessage";
    /**
     *  群组信息
     */
    receive[receive["GroupMessage"] = 1] = "GroupMessage";
    /**
     *  讨论组信息
     */
    receive[receive["DiscussMessage"] = 2] = "DiscussMessage";
    /**
     * 群事件-管理员变动
     */
    receive[receive["GroupAdmin"] = 3] = "GroupAdmin";
    /**
     *  群事件-群成员减少
     */
    receive[receive["GroupMemberDecrease"] = 4] = "GroupMemberDecrease";
    /**
     *  群事件-群成员增加
     */
    receive[receive["GroupMemberIncrease"] = 5] = "GroupMemberIncrease";
    receive[receive["Unknow"] = 6] = "Unknow";
})(receive || (receive = {}));
exports.receive = receive;
var send;
(function (send) {
    send[send["ClientHello"] = 0] = "ClientHello";
    send[send["PrivateMessage"] = 1] = "PrivateMessage";
    send[send["GroupMessage"] = 2] = "GroupMessage";
    send[send["GroupBan"] = 3] = "GroupBan";
    send[send["DiscussMessage"] = 4] = "DiscussMessage";
    send[send["Like"] = 5] = "Like";
    send[send["getGroupInfo"] = 6] = "getGroupInfo";
    send[send["setGroupCard"] = 7] = "setGroupCard";
})(send || (send = {}));
exports.send = send;
