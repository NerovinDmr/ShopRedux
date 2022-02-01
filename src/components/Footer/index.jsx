import React from "react";
import "./styles/Footer.scss";
import {
  MdPhonelinkRing,
  AiOutlineMail,
  BiMapPin,
  TiSocialInstagram,
  TiSocialVimeoCircular,
} from "react-icons/all";

const Footrer = () => {
  return (
    <div className="footer">
      <div className="Our_contacts">Наши контакты</div>
      <div className="Contacts">
        <div className="Contacts_left">
          <div className="footer_phone">
            <MdPhonelinkRing className="mdIcon" /> +7 495 150-28-22{" "}
          </div>
          <div className="mail">
            <AiOutlineMail className="mdIcon" /> info@pokatushkin.com{" "}
          </div>
          <div className="social">
            <span>Оставайтесь на связи:</span>
            <div className="social_icons">
              <TiSocialInstagram color="#cf2387" className="socialIcon" />
              <TiSocialVimeoCircular color="#237ccf" className="socialIcon" />
            </div>
          </div>
        </div>
        <div className="contacts_right">
          <div className="adress">
            <BiMapPin className="mdIcon" /> г. Москва,
            <br />
            ул.Ташкентская 28 строени1 подъезд 3<br />
            м. Юго - Восточная
          </div>
        </div>
      </div>
      <div className="license">2021 © Купить детский электромобиль</div>
    </div>
  );
};

export default Footrer;
