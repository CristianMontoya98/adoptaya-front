import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Button(props) {
  const { text, route } = props;
  return (
    <>
      <Link to={route}>
        <button className={styles.btnForm}>{text}</button>
      </Link>
    </>
  );
}
export { Button };
