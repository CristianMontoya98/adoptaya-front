
import { Card } from "../Adopt/components/Card/Card";
import styles from "./styles.module.css";
function Detail(props) {
  const { detail } = props;
  return (
    <div className={styles.detailSection}>
      <h1>Detalle</h1>
          <h4>Conoce a {detail.name}</h4>
          <Card id={detail.id}
              name={detail.name}
              age={detail.age}
              status={detail.status}
              location={detail.location}
              description={detail.description}
              descriptionabridged={detail.descriptionabridged}
              image={detail.img}
              owner={detail.owner}
              contact={detail.contact}
              contentBtn="Contactar"
              styleBtn={false}
              route="/adopt"
              clickEvent={()=>undefined}
                />
    </div>
  );
}
export { Detail };
