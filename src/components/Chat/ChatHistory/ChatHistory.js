import React from "react";








function ChatHistory (props) {
    let MessageItemElements = props.state.ChatHistory.map(s => <MessageItemElement date={s.date} time={s.time} message={s.message}/>)
    let textareaField = React.createRef();
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
    let onTypeText = () =>
    {
        let text = textareaField.current.value;
        let action = {type: 'UPDATE-MESSAGE', newText: text};
        this.props.dispatch(action)
    }
    return (
        <div className="chat-history">
            <ul className="m-b-0">
                {MessageItemElements}
            </ul>
            <div className="chat-message clearfix">
                <div className="input-group mb-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-send"/></span>
                    </div>
                    <input type="text" value={props.state.NewMessage}
    className="form-control" placeholder="Enter text here..."/>
                </div>
            </div>
        </div>
    );
}

export default ChatHistory;
