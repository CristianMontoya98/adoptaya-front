import styles from "./styles.module.css";
import { useState } from "react";
function SearchBox(props) {
  const { onFilter, setSearch } = props;
  const [searchText, setSearchText] = useState("");
  const handleSearch = ({ target: { value } }) => setSearchText(value);
  const [activeFirst, setActiveFirst] = useState(true);
  const [activeSecond, setActiveSecond] = useState(true);

  /* Function to change the states active and inactive,
 this alternate both states to asign the styles in the filter tags
 */
  const changeClass = (tag) => {
    if (tag === 1) {
      setActiveFirst(false);
      setActiveSecond(true);
    } else if (tag === 2) {
      setActiveSecond(false);
      setActiveFirst(true);
    }
  };

  /*This function clean the search input and re start the styles of the tags*/
  const cleanInput = () => {
    setSearchText("");
    setActiveFirst(true);
    setActiveSecond(true);
  };
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Buscar..."
        />
        <button
          onClick={() => {
            onFilter(searchText);
            setSearch(searchText);
            cleanInput();
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <h1>Filtros</h1>
      <div className={styles.filters}>
        <button
          className={`${styles.filters__tag} ${
            activeFirst ? styles.filters__unActive : styles.filters__active
          }`}
          onClick={() => {
            changeClass(1);
            onFilter("Perro");
            setSearch("PERROS");
          }}
        >
          PERROS
        </button>

        <button
          className={`${styles.filters__tag} ${
            activeSecond ? styles.filters__unActive : styles.filters__active
          }`}
          onClick={() => {
            changeClass(2);
            onFilter("Gato");
            setSearch("GATOS");
          }}
        >
          GATOS
        </button>
      </div>
    </>
  );
}
export { SearchBox };
