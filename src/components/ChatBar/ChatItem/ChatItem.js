import React from "react";

const ChatItemElement = (props) => {
    return (
    <div>
        <li className="clearfix">
            <div>
                <img src={props.avatar} alt="avatar"></img>
            </div>
            <div className="about">
                <div className="name">
                    {props.name}
                </div>
                <div className="status">
                    <i className="fa fa-circle offline">{props.status}</i>
                </div>
            </div>
        </li>
    </div>
    )
}

const ChatItem = (props) => {
    let ChatElement = props.State.Chats.map(s => <ChatItemElement name={s.name} staus={s.status} avatar={s.avatar}/>)

    return (
        <div>
            <ul className="list-unstyled chat-list mt-2 mb-0">
                {ChatElement}
            </ul>
        </div>

    );
}

export default ChatItem;
