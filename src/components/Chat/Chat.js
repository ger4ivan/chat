import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatHistory from "./ChatHistory/ChatHistory";
import ChatMessage from "./ChatMessage/ChatHeader";

const Chat = (props) => {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatHistory State={props.State}/>
            <ChatMessage />
        </div>


    );
}

export default Chat;
