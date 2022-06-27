import React from "react";
import SearchButton from "./SearchButton/SearchButton";
import ChatItem from "./ChatItem/ChatItem";

function ChatBar (props) {
    debugger;
    return (
        <div id="plist" className="ChatBar">
            <SearchButton/>
            <ChatItem state={props.state}/>
        </div>

    );
}

export default ChatBar;
