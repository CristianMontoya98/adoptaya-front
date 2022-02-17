import styles from "./styles.module.css";

function NameField (){

    return(
        <>
        <input type="text" className={styles.nameField}  />
        </>
    )
}
export { NameField };