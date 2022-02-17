import {Button} from "./components/Button/button";
import {NameField} from "./components/NameField/nameField";
import styles from "./styles.module.css";

function ContactForm (){
return(
    <>
        <div className={styles.contentForm}>
        <h1>Un último detalle antes de continuar...</h1>
        <h3>Introduce estos datos, para continuar con el proceso:</h3>
            <div>
                <h2>Nombre*</h2>
                <NameField />
                <h2>Ciudad*</h2>
                <NameField />
            </div>
            <div className={styles.btnForm}>
                <Button text="VOLVER"/>
                <Button text="ENVIAR"/>
            </div>
</div>

</>
);
}

export {ContactForm};