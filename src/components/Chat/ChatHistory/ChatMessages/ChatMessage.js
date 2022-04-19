import React from "react";

function ChatMessage (props) {


    return (
        <li className="clearfix">
            <div className="message-data">
                <span className="message-data-time">{props.date} {props.time}</span>
            </div>
            <div className="message my-message">{props.message}</div>
        </li>
    );
}

export default ChatMessage;
