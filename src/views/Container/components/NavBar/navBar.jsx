import { useState } from 'react';
import logo from '../../../../img/Adopta ya horizontal.svg';
import { ButtonMenu } from './components/ButtonMenu/buttonMenu';
import { ItemsMenu } from './components/ItemsMenu/itemsMenu';
import styles from "./styles.module.css";

function NavBar() {
    const [toggle, setToggle] = useState(false);

const handleMenuClick = () => {
    setToggle(!toggle);
}
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__top}>
                <img src={logo} alt="logo adoptaYa" />
                <ButtonMenu handleMenuClick={handleMenuClick} iconActive={toggle ? "fas fa-times":"fas fa-bars"} />
            </div>
            <ItemsMenu show={toggle}/>
        </nav>
    );
}
export {NavBar}