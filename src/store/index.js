import { createStore, applyMiddleware } from "redux";
import { RootReduser } from "./RootReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

export const store = createStore(RootReduser, composeWithDevTools(applyMiddleware(thunk)))