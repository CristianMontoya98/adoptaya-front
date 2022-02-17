import styles from "./style.modules.css;"
import {petForm} from "./components/PetForm/petForm";
import {ownerForm} from "./components/OwnerForm/ownerForm";

function findAHome (){
    return(
        <div className={styles.findAHomeCard}>

        <ownerForm/>
        <petForm/>

        </div>
  
    );
}

export {findAHome};