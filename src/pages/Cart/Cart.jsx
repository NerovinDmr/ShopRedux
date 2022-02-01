import React from "react";
import "./styles/Cart.scss";
import { GiCrossMark } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { Counter } from "../../components";
export default function Cart() {
  const dispatch = useDispatch();
  const onPlusItem = (id) => {
    dispatch(cartActions.setPlusQty(id));
  };
  const onMinusItem = (id) => {
    dispatch(cartActions.setMinusQty(id));
  };
  const onRemove = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const { cartItems, totalPrice } = useSelector(({ cart }) => cart);
  const addedCartItems = Object.keys(cartItems).map((key) => {
    return cartItems[key].cartItems[0];
  });

  return (
    <div className="cart__wrapp">
      <div className="blok_tittle">
        <h3>Корзина </h3>
      </div>
      <div className="cart">
        {addedCartItems.map((product) => {
          return (
            <div key={product.id} className="cart__item">
              <div className="cart__item_img">
                <img src={product.image} alt="car" />
              </div>
              <div className="cart__item_name">{product.name}</div>
              <Counter
                onMinusItem={onMinusItem}
                onPlusItem={onPlusItem}
                cartItems={cartItems}
                product={product}
              />
              <div className="cart__item_price">
                <p>
                  {new Intl.NumberFormat().format(
                    cartItems[product.id].totalPrice
                  )}
                  руб
                </p>
              </div>
              <div>
                <GiCrossMark
                  onClick={() => {
                    onRemove(product.id);
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className="total_price">
          <p> К оплате: {new Intl.NumberFormat().format(totalPrice)} Руб </p>
        </div>
      </div>
    </div>
  );
}
