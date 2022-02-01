import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import "./styles/SinglePageItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

function SinglePageItem() {
  const dispatch = useDispatch();
  const { prodact, loading } = useSelector((store) => store.prodact);
  const { id } = useParams();
  return (
    <div>
      {loading ? (
        <h1>
          {[...prodact.prodacts]
            .filter((card) => card.id === id)
            .map((card) => (
              <div key={card.id} className="fullCard">
                <div className="blok_tittle">
                  <h3>{card.name} </h3>
                </div>
                <div className="fullCard_wrapper">
                  <div className="fullCard_item">
                    <div className="fullCard_item_img">
                      <img src={card.image} alt="img"></img>
                    </div>
                    <div className="fullCard_item_price">
                      {new Intl.NumberFormat().format(card.price)} руб
                      <button
                        onClick={() => {
                          let itemscard = { ...card };
                          dispatch(cartActions.addCartItem(itemscard));
                        }}
                      >
                        в корзину{" "}
                      </button>
                    </div>
                  </div>
                  <div className="fullCard_info">
                    <div className="fullCard_info_tittle">
                      <h3>Характеристики </h3>
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Максимальная скорость</td>
                          <td>{card.specifications.maxSpeed} км/ч</td>
                        </tr>
                        <tr>
                          <td>Максимальная нагрузка</td>
                          <td>{card.specifications.maxLoad} кг</td>
                        </tr>
                        <tr>
                          <td>Вес</td>
                          <td>{card.specifications.weight} кг</td>
                        </tr>
                        <tr>
                          <td>Двигатель</td>
                          <td>{card.specifications.engine}</td>
                        </tr>
                        <tr>
                          <td>Мощность двигателя</td>
                          <td>{card.specifications.enginePower} Л.С</td>
                        </tr>
                        <tr>
                          <td>Объем двигателя</td>
                          <td>
                            {card.specifications.engineCapacity} см<sup>3</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>Объем топливного бака</td>
                          <td>
                            {card.specifications.fuelTankCapacity} Л<sup>3</sup>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
        </h1>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default SinglePageItem;
