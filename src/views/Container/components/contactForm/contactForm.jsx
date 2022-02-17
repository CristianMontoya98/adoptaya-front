import { useState } from "react";
import { Button } from "./components/Button/button";
import { NameField } from "./components/NameField/nameField";
import styles from "./styles.module.css";

function ContactForm(props) {
  const { detail } = props;
  const [nameText, setNameText] = useState("");
  const [cityText, setCityText] = useState("");

  let message = `Hola soy ${nameText}, de ${cityText}. %0A Vi a ${detail.name} en Adopta Ya y me gustaría tener más información`;
  let ref = `https://api.whatsapp.com/send?phone=${detail.contact}&text=${message}`;
  return (
    <>
      <div className={styles.contactForm}>
        <div className={styles.contactForm__title}>
          <h1>Un último detalle antes de continuar...</h1>
          <h2>Introduce estos datos, para continuar con el proceso:</h2>
        </div>
        <div className={styles.contactForm__fields}>
          <h2>Nombre*</h2>
          <NameField
            placeHolder="Digita tu nombre"
            value={nameText}
            change={setNameText}
          />
          <h2>Ciudad*</h2>
          <NameField
            placeHolder="Digita tu ciudad"
            value={cityText}
            change={setCityText}
          />
        </div>
        <div className={styles.buttons}>
          {/* <button>Volver</button>
                <button>Enviar</button> */}
          <Button text="VOLVER" route="/detail" />
          <a href={ref} target="_blank" rel="noreferrer">
            <button>ENVIAR</button>
          </a>
        </div>
      </div>
    </>
  );
}

export { ContactForm };
