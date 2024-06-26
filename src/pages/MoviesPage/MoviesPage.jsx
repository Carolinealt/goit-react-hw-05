import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchByQuery } from "../../api";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userQuery = e.target.qwerty.value.trim();
    setQuery(() => {
      return userQuery;
    });
  };

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="qwerty" />
        <button type="submit">search</button>
      </form>
      {films.length > 0 && (
        <MovieList films={films} title={`Results ${query}`} />
      )}
    </>
  );
};

export default MoviesPage;
