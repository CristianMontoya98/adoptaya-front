import { useState } from "react";
import {BackButton} from "./components/BackButton/backButton";
import {NameField} from "./components/NameField/nameField";
import {SendButton} from "./components/BackButton/backButton";
import styles from "./styles.module.css";

function contactForm (){
return(
<>
<div classname={styles.contactForm}>
<NameField>Introduce tu nombre</NameField>
<div classname={styles.contact__btn}>

    </div>
</div>
</>
);
}

export {contactForm};