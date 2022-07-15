import React from 'react';
import {connect} from "react-redux";
import Chat from "./Chat";
import {AddMessageCreator, onTypeTextMessage} from "../../redux/chatReducer";


let mapStateToProps = (state) => {

    return {
        Chat: state.ChatHistory.Messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(AddMessageCreator());
        },
        onTypeText: (text) => {
            dispatch(onTypeTextMessage(text));
        }
    }
}


const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;