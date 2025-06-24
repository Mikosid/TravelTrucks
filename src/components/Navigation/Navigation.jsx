import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

import travelTrucks from "/src/svg/travel-trucks.svg";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <ul>
      <li>
        <img src={travelTrucks} alt="Travel Trucks" />
      </li>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog" className={getNavLinkClass}>
          Catalog
        </NavLink>
      </li>
    </ul>
  );
}
