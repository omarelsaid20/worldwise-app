import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  console.log(position);

  console.log(city);

  function onDeleteHandler(e) {
    e.preventDefault();

    deleteCity(id);
  }

  return (
    <Link
      className={`${styles.cityItem} ${
        id === currentCity.id ? styles["cityItem--active"] : ""
      }`}
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
    >
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.name}>{cityName}</span>
      <time className={styles.date}>{formatDate(date || null)}</time>
      <button className={styles.deleteBtn} onClick={onDeleteHandler}>
        &times;
      </button>
    </Link>
  );
}

export default CityItem;
