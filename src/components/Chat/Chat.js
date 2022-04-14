import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatHistory from "./ChatHistory/ChatHistory";

const Chat = (props) => {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatHistory state={props.state}/>

        </div>


    );
}

export default Chat;
