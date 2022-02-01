import { cartActionTypes } from "./actions";

const initialState = {
  cartItems: [],
  loading: false,
  totalPrice: 0,
  totalCount: 0,
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => +obj.price + +sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};
const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_CART:
      const currentItems = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].cartItems, action.payload];
      const newItems = {
        ...state.cartItems,
        [action.payload.id]: {
          cartItems: currentItems,
          totalPrice: getTotalPrice(currentItems)
        },
      };
      const totalCount = getTotalSum(newItems, 'cartItems.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');
      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice

      };

    case cartActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case cartActionTypes.SET_CLEAR:
      return { ...state, Cart: [] }

    case cartActionTypes.SET_PLUS_QTY: {
      const newObjItems = [
        ...state.cartItems[action.payload].cartItems,
        state.cartItems[action.payload].cartItems[0],
      ];
      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          cartItems: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'cartItems.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }
    case cartActionTypes.SET_MINUS_QTY: {
      const oldItems = state.cartItems[action.payload].cartItems;
      const newObjItems =
        oldItems.length > 1 ? state.cartItems[action.payload].cartItems.slice(1) : oldItems;
      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          cartItems: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'cartItems.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }
    case cartActionTypes.REMOVE_FROM_CART: {
      const newItems = {
        ...state.cartItems,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].cartItems.length;
      delete newItems[action.payload];
      return {
        ...state,
        cartItems: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };

    }
    default:
      return state
  }
}