import styles from "./styles.module.css";

function Button(props){
    const { text } = props;
    return (
        <>
            <span className={styles.btnForm}>
                <a>{text}</a>
            </span>
        </>
    );
}
export { Button };