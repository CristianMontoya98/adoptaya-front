import { Link } from 'react-router-dom';
import styles from './styles.module.css';
function ItemsMenu(props) {
    const {show, handleItemClick} = props;
    return (
        <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
            <ul className={styles.menu__elements}>
                <li onClick={()=>handleItemClick()}><Link to="/adopt">Inicio</Link></li>
                <li onClick={()=>handleItemClick()}><Link to="/adopt">Adóptame</Link></li>
                <li onClick={()=>handleItemClick()}>Encuentrale hogar</li>
            </ul>
        </div>
    );
}
export { ItemsMenu };