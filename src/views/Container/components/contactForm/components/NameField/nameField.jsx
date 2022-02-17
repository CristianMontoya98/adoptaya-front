import styles from "./styles.module.css";

function NameField (props){
    const { placeHolder, value, change } = props
    const handleText = ({ target: { value } }) => change(value);
    return(
        <>
            <input type="text" className={styles.nameField} placeholder={placeHolder} value={value} onChange={handleText}/>
        </>
    )
}
export { NameField };