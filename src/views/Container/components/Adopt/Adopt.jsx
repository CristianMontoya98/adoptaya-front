import { useState } from "react";
import { Card } from "./components/Card/Card";
import { SearchBox } from "./components/SearchBox/searchBox";
import styles from "./styles.module.css";
import data from "../../../../data/data.json";
function Adopt() {
  const [filterData, setFilterData] = useState(data);
  const [searchText, setSearchText] = useState("");
  /* Function to filter the data and set the filterData state
  with the corresponding array, use a string called type to
  compares with the propertys type and name of the json  */
  const filter = (text) => {
    setFilterData(
      data.filter((val) => {
        return (
          val.age.toLowerCase().includes(text.toLowerCase()) ||
          val.location.toLowerCase().includes(text.toLowerCase()) ||
          val.species.toLocaleLowerCase().includes(text.toLocaleLowerCase())||
          val.status.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        );
      })
    );
  };
  return (
    <section className={styles.adoptSection}>
      <h1>Mascotas en adopción</h1>
          <SearchBox onFilter={filter} setSearch={setSearchText} />
          <p>{filterData.length === 0 && <>No hay resultados para la busqueda: <span>{searchText}</span></>}
          {(searchText.length > 0 && filterData.length > 0) && <>Filtrado por: <span>{searchText}</span></>}
          </p>
          
          
      <div className={styles.cards}>
        {filterData.map((value, index) => (
          <Card
            key={index}
            name={value.name}
            age={value.age}
            status={value.status}
            location={value.location}
            description={value.description}
            image={value.img}
            owner={value.owner}
          />
        ))}
      </div>
    </section>
  );
}
export { Adopt };
