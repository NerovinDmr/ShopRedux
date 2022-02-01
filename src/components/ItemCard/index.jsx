import React from "react";
import "./styles/itemCard.scss";
import { Link } from "react-router-dom";

function ItemCard({ showcase }) {
  return (
    <div className="showcase_display">
      {showcase.map((showcase) => {
        return (
          <div key={showcase.id} className="showcase_display_item">
            <div className="showcase_display_item_card">
              <div className="showcase_card_content">
                <div className="showcase_card_content_img">
                  <img src={showcase.image} alt="car"></img>
                </div>
                <div className="showcase_card_content_name">
                  <span>{showcase.name}</span>
                </div>
                <div className="showcase_card_content_price">
                  от {new Intl.NumberFormat().format(showcase.price)} Руб
                </div>
                <button className="button_info">
                  <Link to={`/item/${showcase.id}`}>подробнее</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
