import React from "react";
import ChatMessage from "./ChatMessages/ChatMessage";
import {AddMessageCreator, onTypeTextMessage} from "../../../redux/chatReducer";

function ChatHistory(props) {

    let ChatMessages = props.state.ChatHistory.Messages.map(s => <ChatMessage date={s.date} time={s.time} message={s.message}/>)

    let textareaField = React.createRef();

    let addMessage = () => {
        props.dispatch(AddMessageCreator());
    }
    let onTypeText = () => {

         let text = textareaField.current.value;
         let action = onTypeTextMessage(text);

        props.dispatch(action);

    }
    return (
        <div className="chat-history">
            <ul className="m-b-0">
                {ChatMessages}
            </ul>
            <div className="chat-message clearfix">
                <div className="input-group mb-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-send"/></span>
                    </div>
                    <div><input type="text" ref={textareaField} value={props.state.ChatHistory.NewMessage} onChange={onTypeText}
                                className="form-control" placeholder="Enter text here..."/></div>


                    <div><button onClick={addMessage}>Отправить сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHistory;
