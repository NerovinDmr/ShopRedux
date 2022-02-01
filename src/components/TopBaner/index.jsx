import React from "react";
import "./styles/TopBaner.scss";
import Slider from "../Slider";

const TopBaner = ({ slides }) => {
  return (
    <div className="banner">
      <div className="banner_left">
        <div className="banner_left_FirstItem">
          <div className="banner_left_FirstItem_content">
            <span className="banner_title"> джипы</span>
            <div className="banner_txt">
              Сочетание солидности и проходимости
            </div>
          </div>
        </div>
        <div className="banner_left_SecondItem">
          <div className="banner_left_SecondItem_content">
            <span className="banner_title"> до 15 тысяч</span>
            <div className="banner_txt">
              Компактные электромобили за умеренную цену
            </div>
          </div>
        </div>
      </div>
      <div className="banner_middle">
        <Slider slides={slides} />
      </div>
      <div className="banner_left">
        <div className="banner_left_FirstItem">
          <div className="banner_left_FirstItem_content">
            <span className="banner_title"> Полный привод</span>
            <div className="banner_txt">
              Для тех, кому мало катания по асфальту
            </div>
          </div>
        </div>
        <div className="banner_left_SecondItem">
          <div className="banner_left_SecondItem_content">
            <span className="banner_title">Квадроциклы</span>
            <div className="banner_txt">Для активных покатушек</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBaner;
