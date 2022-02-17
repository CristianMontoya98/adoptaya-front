import styles from "./styles.module.css";
function ButtonMenu(props) {
  const { handleMenuClick, iconActive } = props;
  return (
    <>
      <span className={styles.btnMenu} onClick={handleMenuClick}>
        <i className={iconActive}></i>
      </span>
    </>
  );
}
export { ButtonMenu };
