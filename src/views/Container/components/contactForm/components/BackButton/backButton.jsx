import styles from "./styles.module.css";

function BackButton(props){
    const { handleBackClick, iconActive } = props;
    return (
        <>
            <span className={styles.btnBack} onClick={handleBackClick}>
                <a className={iconActive}>VOLVER</a>i
            </span>
        </>
    );
}
export { BackButton };