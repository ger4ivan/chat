import React from "react";
import Chat from "./Chat";
import {connect} from "react-redux";
import {AddMessageCreator, onTypeTextMessage} from "../../redux/messages-reducer";


let mapStateToProps = (state) => {
    return {
        ChatHistory: state.ChatHistory
    }
}

let mapDispatchToProps = (dispatch) => {
    return    {
        addMessage: () => {
            dispatch(AddMessageCreator());
        },
        onTypeText: (body) => {
        dispatch(onTypeTextMessage(body));
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
