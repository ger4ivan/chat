import React from "react";

const MessageItemElement = (props) => {
    return (
        <li className="clearfix">
            <div className="message-data">
                <span className="message-data-time">{props.date} {props.time}</span>
            </div>
            <div className="message my-message">{props.message}</div>
        </li>
    )
}


function ChatHistory (props) {
    let MessageItemElements = props.State.ChatHistory.map(s => <MessageItemElement date={s.date} time={s.time} message={s.message}/>)
    return (
        <div className="chat-history">
            <ul className="m-b-0">
                {MessageItemElements}
            </ul>
        </div>
    );
}

export default ChatHistory;
