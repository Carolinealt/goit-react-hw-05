import { useState } from "react";
import "./App.css";
import { funcApi } from "./api";
import { useEffect } from "react";

function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await funcApi();
        const timing = data.data.results;
        setFilms((prev) => [...prev, ...timing]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [setFilms]);

  return (
    <ul>
      {films.map((el) => (
        <li key={`${el.id}${Math.random()}`}>
          <img
            src={`http://image.tmdb.org/t/p/w1280/${el.backdrop_path}`}
            alt=""
          />
          <p>{el.original_title}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
