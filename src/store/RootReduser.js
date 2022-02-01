import { combineReducers } from "redux"
import { cartReducer as cart } from "./cart";
import { prodactReducer as prodact } from "./prodact";
export const RootReduser = combineReducers({
    cart, prodact
})