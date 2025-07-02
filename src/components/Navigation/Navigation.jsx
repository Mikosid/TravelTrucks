import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

import travelTrucks from "/src/svg/travel-trucks.svg";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <img src={travelTrucks} alt="Travel Trucks" />
      <ul className={css.list}>
        <li className={css.centeredGroup}>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.navigationGap}>
          <NavLink to="/catalog" className={getNavLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
