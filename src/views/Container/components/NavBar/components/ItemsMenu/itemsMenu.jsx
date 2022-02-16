import styles from './styles.module.css';
function ItemsMenu(props) {
    const {show} = props;
    return (
        <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
            <ul className={styles.menu__elements}>
                <li>Inicio</li>
                <li>Adóptame</li>
                <li>Encuentrale hogar</li>
            </ul>
        </div>
    );
}
export { ItemsMenu };