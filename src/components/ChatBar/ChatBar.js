import React from "react";
import SearchButton from "./SearchButton/SearchButton";
import ChatItem from "./ChatItem/ChatItem";

function ChatBar (props) {
    return (
        <div id="plist" className="ChatBar">
            <SearchButton/>
            <ChatItem State={props.State}/>
        </div>

    );
}

export default ChatBar;
