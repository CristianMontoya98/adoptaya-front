import { useState } from "react";
import { Card } from "./components/Card/Card";
import { SearchBox } from "./components/SearchBox/searchBox";
import styles from "./styles.module.css";
import data from "../../../../data/data.json";
function Adopt(props) {
    const {setDet } = props;
    const [searchText, setSearchText] = useState("");
    const [filterData, setFilterData] = useState(data);
 

    const details = (detailObj) => {
        setDet(detailObj);
    }
  
  /* Function to filter the data and set the filterData state
  with the corresponding array, use a string called text to
  compares with the properties of the json  */
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
                id={value.id}
                name={value.name}
                age={value.age}
                status={value.status}
                location={value.location}
                description={value.description}
                descriptionabridged={value.descriptionabridged}
                image={value.img}
                owner={value.owner}
                contact={value.contact}
                contentBtn={<i className="fas fa-plus"></i>}
                styleBtn={true}
                route="/detail"
                clickEvent= {details}
          />
        ))}
      </div>
    </section>
  );
}
export { Adopt };
