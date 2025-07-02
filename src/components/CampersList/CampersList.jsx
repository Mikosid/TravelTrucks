import CampersCard from "../CampersCard/CampersCard";
import css from "./CampersList.module.css";

export default function CampersList({ campers }) {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CampersCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
