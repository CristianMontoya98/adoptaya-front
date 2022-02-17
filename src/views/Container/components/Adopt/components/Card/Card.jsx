import styles from './styles.module.css';
function Card(props) {
    const {name, age, status, location, description, image, owner } = props;
    return (
        <div className={styles.card}>
            <img src={image} alt="Mascota" />
            <div className={styles.card__textTop}>
                <h2>{name}, {age}</h2>
                <h2><i className="far fa-compass"></i>{location}</h2>
            </div>
            <div className={styles.nameOwner}>
                <h3>{owner}</h3>
            </div>
            <div className={styles.description}>
            
                <h2>Descripción: {description}</h2>
            </div>
            <div className={styles.card__bottom}>
            <div className={styles.card__textBottom}>
                <i className="far fa-heart"></i>
                    
                    <span>{status}</span>
                </div>
                <button className={styles.card__btn}><i className="fas fa-plus"></i></button>
                </div>
            </div>
    );
}
export { Card };