
import chatReducer from "./chatReducer";
import {combineReducers, createStore} from "redux";
import chatBarReducer from "./chatBarReduser";
let reducers = combineReducers ( {
    messagesPage: chatReducer,
    chatBarPage: chatBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
