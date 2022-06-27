import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    chatPage: messagesReducer,
});


let store = createStore(reducers);
window.store = store;
export default store;
