import { useEffect, useState } from "react";
import { trendingMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useLocation } from "react-router-dom";
import css from './HomePage.module.css';
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(() => {
    return { toShow: false, message: "" };
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const data = await trendingMovies();
        const results = data.data.results;
        setFilms(() => [...results]);
      } catch (error) {
        setError({
          toShow: true,
          message: "Please, check your network and reload the page",
        });
      }
    };
    getData();
  }, [setFilms]);

  return (
    <div className={css.wrapper}>
      {error.toShow && <NotFoundPage message={error.message} />}
      {films.length > 0 && (
        <MovieList
          films={films}
          title={"trending movies"}
          queryLocation={location.pathname}
        />
      )}
    </div>
  );
};
export default HomePage;
