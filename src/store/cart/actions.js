export const cartActionTypes = {
    ADD_CART: 'CART.ADD_CART',
    SET_CLEAR: 'CART.SET_CLEAR',
    SET_LOADING: 'CART.SET_LOADING',
    SET_PLUS_QTY: 'CART.SET_PLUS_QTY',
    SET_MINUS_QTY: 'CART. SET_MINUS_QTY',
    REMOVE_FROM_CART: "CART.REMOVE_FROM_CART"

}

export const cartActions = {
    addCartItem: (cartItem) => ({ type: cartActionTypes.ADD_CART, payload: cartItem }),
    setLoading: (loading) => ({ type: cartActionTypes.SET_LOADING, payload: loading }),
    setClear: () => ({ type: cartActionTypes.SET_CLEAR }),
    setPlusQty: (id) => ({ type: cartActionTypes.SET_PLUS_QTY, payload: id }),
    setMinusQty: (id) => ({ type: cartActionTypes.SET_MINUS_QTY, payload: id }),
    removeFromCart: (id) => ({ type: cartActionTypes.REMOVE_FROM_CART, payload: id }),
}
