import { Link, useLocation } from "react-router-dom";
import css from "./CampersCard.module.css";

export default function CampersCard({
  camper: {
    id,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
  },
}) {
  const currentLocation = useLocation();

  return (
    <div className={css.wrapper}>
      <div className={css.gallery}>
        <img src={gallery[0]?.thumb} alt={name} />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <h2>{name}</h2>
          <span className={css.price}>€{price}</span>
        </div>

        <p className={css.location}>
          <b>Location:</b> {location}
        </p>
        <p className={css.rating}>
          <b>Rating:</b> {rating}
        </p>
        <p className={css.description}>{description}</p>

        <div className={css.features}>
          <p>
            <b>Transmission:</b> {transmission}
          </p>
          <p>
            <b>Engine:</b> {engine}
          </p>

          {AC && <p>✅ AC</p>}
          {kitchen && <p>✅ Kitchen</p>}
          {radio && <p>✅ Radio</p>}
          {microwave && <p>✅ Microwave</p>}
          {gas && <p>✅ Gas</p>}
          {water && <p>✅ Water</p>}
          {bathroom && <p>✅ Bathroom</p>}
          {TV && <p>✅ TV</p>}
          {refrigerator && <p>✅ Refrigerator</p>}
        </div>

        <Link to={`/campers/${id}`} state={currentLocation}>
          View Details
        </Link>
      </div>
    </div>
  );
}
