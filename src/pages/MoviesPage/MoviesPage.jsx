import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchByQuery } from "../../api";
import { useLocation, useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");
  const [params, setParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userQuery = e.target.query.value.trim();
    setQuery(() => {
      return userQuery;
    });
  };

  const location = useLocation();

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const data = await searchByQuery(query);

        const results = data.data.results;
        setFilms(() => {
          return results;
        });
      } catch (e) {
        console.log(e);
      }
    };
    getMoviesList();
  }, [setFilms, query]);

  const setSearchParams = ({ target: { value } }) => {
    params.set("query", `${value}`);
    setParams(params);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={params.get("query") ?? ""}
          onChange={setSearchParams}
          className={css.input}
        />
        <button type="submit" className={css.btn}>search</button>
      </form>

      {films.length > 0 && (
        <MovieList
          films={films}
          title={`Results ${query}`}
          queryLocation={location}
        />
      )}
    </>
  );
};

export default MoviesPage;
