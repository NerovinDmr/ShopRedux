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
    fetchCart: () => async (dispatch) => {
        dispatch(cartActionTypes.setLoading(true));

        try {
            const response = await fetch('http://localhost:3000/ShowcaseDB.json');
            const cartItems = await response.json();

            dispatch(cartActionTypes.addCartItem(cartItems));
        } catch (error) {
            console.log(error.message);
        } finally {
            dispatch(cartActionTypes.setLoading(false));
        }
    }
}
