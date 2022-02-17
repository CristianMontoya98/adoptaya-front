import { useState, useEffect } from "react";
import { Card } from "./components/Card/Card";
import { SearchBox } from "./components/SearchBox/searchBox";
import styles from "./styles.module.css";
import axios from "axios";

function Adopt() {
  const [loaderData, setLoaderData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([0]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    
    axios.get(`/api/pets`).then(res => {
      console.log(res.data.pets);
      if (res.data.status === 200) {
        setData(res.data.pets);
        setLoading(true);
        setLoaderData(true);
      }

    });
  }, []);

  /* Function to filter the data and set the filterData state
  with the corresponding array, use a string called type to
  compares with the propertys type and name of the json  */
  const filter = (text) => {
    
    setFilterData(
      data.filter((val) => {
        return (
          //val.age.toLowerCase().includes(text.toLowerCase()) ||
          val.location.toLowerCase().includes(text.toLowerCase()) ||
          val.species.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          val.status.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        );
      })
    );

  };
  return (
    <section className={styles.adoptSection}>
      <h1>Mascotas en adopción</h1>
      <SearchBox onFilter={filter} setSearch={setSearchText} loading={setLoading} />
      <p>{filterData.length === 0 && <>No hay resultados para la busqueda: <span>{searchText}</span></>}
        {(searchText.length > 0 && filterData.length > 0) && <>Filtrado por: <span>{searchText}</span></>}
      </p>

      {loaderData?

      
      <div className={styles.cards}>
        {loading?data.map((value, index) => (
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
        )): filterData.map((value, index) => (
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
      </div>:<h1>Cargando...</h1>
    }
    </section>
  );
}
export { Adopt };
