import React from "react";
import "./styles/header.scss";
import Logo from "../../assets/images/Logo.webp";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { prodactAction } from "../../store/prodact";

const Header = () => {
  const { totalCount } = useSelector(({ cart }) => cart);
  const { prodact } = useSelector((store) => store.prodact);
  const [serchParam, setSerchParam] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(prodactAction.fatchProdact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="headerBlock">
      <Link to={"/"}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>

      <div className="serch">
        <input
          value={serchParam}
          type="text"
          placeholder="поиск"
          onChange={(e) => setSerchParam(e.target.value.toLowerCase())}
        />
        <ul className="searcField">
          {serchParam
            ? [...prodact.prodacts]
                .filter((card) => card.name.toLowerCase().includes(serchParam))
                .map((card) => (
                  <li key={card.id} onClick={() => setSerchParam("")}>
                    <Link to={`/item/${card.id}`}>{card.name}</Link>
                  </li>
                ))
            : ""}
        </ul>
      </div>
      <div className="phone">
        <p>+7(495)150-28-22</p>
      </div>
      <div className="basket">
        <Link to={"/cart"}>
          <AiOutlineShoppingCart className="iconSvg" />
          <p>{totalCount}</p>
        </Link>
      </div>
    </div>
  );
};
export default Header;
