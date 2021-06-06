import {createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import RootReducer from "./reducers/rootreducer";

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store