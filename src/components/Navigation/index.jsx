import React from "react";
import { menu } from "./menu.json";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import "./styles/Navigation.scss";
function Navigation() {
  const [isOpen,setIsOpen] = React.useState(false)
  const  onOpen=()=>{
    !isOpen?setIsOpen(true):setIsOpen(false)
  }
  return (
    <nav className="menu_list">
          <li className="menu" onClick={onOpen}>Меню</li>
      {menu.map((menu) => {
        return (
          <li  className={classNames(isOpen? "activeMenu":'menu_items')} key={menu.id}>
            <NavLink to={menu.path} activeClassName="selected">
              {menu.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
}

export default Navigation;
