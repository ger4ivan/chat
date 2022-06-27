
import './App.css';
import React from "react";
import ChatBar from './components/ChatBar/ChatBar';

import ChatContainer from "./components/Chat/ChatContainer";

const App = (props) => {

  return (
    <div className="App">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <ChatBar state={props.state}/>
              <ChatContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
