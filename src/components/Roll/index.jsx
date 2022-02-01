import React from "react";
import "./styles/Roll.scss";
import gift from "../../assets/images/gift.png";
import sheld from "../../assets/images/sheld.png";
import track from "../../assets/images/track.png";
import cercal from "../../assets/images/cercal.png";
const Roll = () => {
  return (
    <div className="roll">
      <div className="roll_wrapper">
        <div className="roll_wrapper_content">
          <div className="roll_img">
            <img src={cercal} alt="cercal" />
          </div>
          <div className="roll_item">
            <p>Оплата при получении</p>
          </div>
        </div>
        <div className="roll_wrapper_content">
          <div className="roll_img">
            <img src={sheld} alt="sheld" />
          </div>
          <div className="roll_item">
            <p>Гарантия 12 месяцев</p>
          </div>
        </div>

        <div className="roll_wrapper_content">
          <div className="roll_img">
            <img src={gift} alt="gift" />
          </div>
          <div className="roll_item">
            <p>Подарок при покупке электромобиля</p>
          </div>
        </div>
        <div className="roll_wrapper_content">
          <div className="roll_img">
            <img src={track} alt="track" />
          </div>
          <div className="roll_item">
            <p>Удобная и быстрая доставка</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roll;
