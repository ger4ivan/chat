import React from 'react';
import {chatBarReducer} from "../../redux/chatBarReduser";
import ChatBar from "./ChatBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    debugger;

    return {
        Chats: state.chatBarPage.Chats
    }
}

const ChatBarContainer = connect(mapStateToProps)(ChatBar);

export default ChatBarContainer;