import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Card(props) {
  const {
    name,
    age,
    status,
    location,
    description,
    descriptionabridged,
    image,
    owner,
    contact,
    id,
    contentBtn,
      styleBtn,
      route,
    clickEvent
  } = props;

  let detailObj = {
    id: id,
    name: name,
    status: status,
    location: location,
    description: description,
    descriptionabridged: descriptionabridged,
    img: image,
    age: age,
    owner: owner,
    contact: contact,
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="Mascota" />
      <div className={styles.card__textTop}>
        <h2>
          {name}, {age}
        </h2>
        <h2>
          <i className="far fa-compass"></i>
          {location}
        </h2>
      </div>
      <div className={styles.nameOwner}>
        <h3>{owner}</h3>
      </div>
      <div className={styles.description}>
        <h2>Descripción: {styleBtn ? descriptionabridged : description}</h2>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__textBottom}>
          <span>{status}</span>
        </div>
              <Link to={route}>
          <button
            className={`${
              styleBtn ? styles.card__btn : styles.card__btnContact
            }`}
            onClick={() => clickEvent(detailObj)}
          >
            {contentBtn}
          </button>
        </Link>
      </div>
    </div>
  );
}
export { Card };
