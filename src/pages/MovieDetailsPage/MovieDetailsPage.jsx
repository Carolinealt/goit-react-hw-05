import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleMovie } from "../../api";
import css from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [posterPath, setPosterPath] = useState(``);

  const { movieId } = useParams();

  useEffect(() => {
    const getOneMovie = async () => {
      const cleanMovieId = movieId.replace(":", "");
      const data = await singleMovie(cleanMovieId);
      setMovie(() => data.data);
    };

    getOneMovie();
  }, [movieId, setMovie]);

  const { title, vote_average, overview, genres, poster_path } = movie;
  useEffect(() => {
    setPosterPath(`https://image.tmdb.org/t/p/w780/${poster_path}`);
  }, [setPosterPath, poster_path]);

  return (
    <>
      <button>back</button>
      <div>
        <ul className={css.list}>
          <li className={css.listItem}>
            <div className={css.containerDetails}>
              <img src={posterPath} alt={title} className={css.poster} />
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.containerDetails}>
              <h2>{title} </h2>
              <p>user score: {vote_average}</p>
            </div>
            <div className={css.containerDetails}>
              <h3>overview</h3>
              <p className={css.overview}>{overview}</p>
            </div>
            <div className={css.containerDetails}>
              <h4>genres</h4>
              <div className={css.containerGenres}>
                {genres &&
                  genres.map((el) => (
                    <p className={css.genre} key={el.id}>
                      <span>{el.name}</span>
                    </p>
                  ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsPage;
