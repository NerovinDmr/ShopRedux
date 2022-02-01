import { prodactActionTypes } from "./actions";

const initialState = {
    prodact: [],
    currentPage: 1,
    perPage: 10,
    total: 0,
    loading: false,
}

export const prodactReducer = (state = initialState, action) => {
    switch (action.type) {
        case prodactActionTypes.GET_PRODACT:
            return {
                ...state,
                prodact: action.payload,
                total: action.payload.prodacts.length,
                loading: true
            }

        case prodactActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case prodactActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}