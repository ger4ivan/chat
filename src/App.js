
import './App.css';
import ChatBar from './components/ChatBar/ChatBar';
import Chat from "./components/Chat/Chat";

function App(props) {

  return (
    <div className="App">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <ChatBar state={props.state}/>
              <Chat state={props.state} dispatch={props.dispatch}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
