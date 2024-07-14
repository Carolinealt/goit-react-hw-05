import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchByQuery } from "../../api";
import { useLocation, useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [isError, setIsError] = useState(false)
  const query = params.get("query");
  const setSearchParams = (value) => {
    params.set("query", `${value}`);
    setParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userQuery = e.target.query.value.trim();
    setSearchParams(userQuery);

  };

  const location = useLocation();

  useEffect(() => {
    if (query === null) return;
    const getMoviesList = async () => {
      try {
        const data = await searchByQuery(params.get('query'));

        const results = data.data.results;
        setFilms(() => {
          return results;
        });
      } catch (e) {
        setIsError(true)
      }
    };
    getMoviesList();
  }, [setFilms, params, setIsError]);


  return (
    <>
    {isError && }
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
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
