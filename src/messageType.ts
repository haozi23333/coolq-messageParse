/**
 * Created by haozi on 5/8/2017.
 */


enum receive {
    /**
     *  私聊信息
     */
    PrivateMessage,
        /**
         *  群组信息
         */
    GroupMessage,
        /**
         *  讨论组信息
         */
    DiscussMessage,
        /**
         * 群事件-管理员变动
         */
    GroupAdmin,
        /**
         *  群事件-群成员减少
         */
    GroupMemberDecrease,
        /**
         *  群事件-群成员增加
         */
    GroupMemberIncrease,
    Unknow
}

enum send {
    ClientHello,
    PrivateMessage,
    GroupMessage,
    GroupBan,
    DiscussMessage,
    Like,
    getGroupInfo,
    setGroupCard,


}
export {
    send,
    receive
}