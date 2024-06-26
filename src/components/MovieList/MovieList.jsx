import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ films, title }) => {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.header}>{title}</h2>
        <ul className={css.list}>
          {films.map((el) => (
            <li key={`${el.id}${Math.random()}`} className={css.listItem}>
              <Link to={`/movies/${el.id}`} className={css.Link}>
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
