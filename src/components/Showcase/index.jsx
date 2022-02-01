import React from "react";
import "./styles/Showcase.scss";
import ItemCard from "../ItemCard";
import classNames from "classnames";

const Showcase = ({ showcase }) => {
  let initialArr = [...showcase.hit];
  const [showSort, setShowSort] = React.useState(initialArr);
  const [itemStatus, setItemStatus] = React.useState("hit");

  const filterSwitcher = (e) => {
    let filterAtr = e.target.getAttribute("data");
    setItemStatus(filterAtr);
    switch (filterAtr) {
      case "hit":
        initialArr = [...showcase.hit];
        return setShowSort(initialArr);
      case "recomended":
        initialArr = [...showcase.recomended];
        return setShowSort(initialArr);
      case "new":
        initialArr = [...showcase.new];
        return setShowSort(initialArr);

      default:
        return false;
    }
  };
  return (
    <div className="showcase">
      <div className="showcase_filter">
        <span
          onClick={filterSwitcher}
          data="hit"
          className={classNames(
            "showcase_filter_name",
            `${itemStatus}` === "hit" ? "active" : ""
          )}
        >
          Хит
        </span>
        <span
          onClick={filterSwitcher}
          data="recomended"
          className={classNames(
            "showcase_filter_name",
            `${itemStatus}` === "recomended" ? "active" : ""
          )}
        >
          Советуем
        </span>
        <span
          onClick={filterSwitcher}
          data="new"
          className={classNames(
            "showcase_filter_name",
            `${itemStatus}` === "new" ? "active" : ""
          )}
        >
          Новинки
        </span>
      </div>
      <ItemCard showcase={showSort} />:
    </div>
  );
};
export default Showcase;
