import React from 'react';
import './App.css';
import ChatBar from './components/ChatBar/ChatBar';
import Chat from "./components/Chat/Chat";
import ChatBarContainer from "./components/ChatBar/ChatBarContainer";
import ChatContainer from "./components/Chat/ChatContainer"
import {Route} from "react-router-dom";

const App = () => {

  return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div className="App">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card chat-app">

                <ChatBarContainer />
                <ChatContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

}

export default App;
