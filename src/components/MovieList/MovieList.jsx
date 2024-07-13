import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ films, title, queryLocation }) => {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.header}>{title}</h2>
        <ul className={css.list}>
          {films.map((el) => (
            <li key={`${el.id}${Math.random()}`} className={css.listItem}>
              <Link
                to={`/movies/${el.id}`}
                state={queryLocation}
                className={css.Link}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
                  alt=""
                  className={css.img}
                />
                {el.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
