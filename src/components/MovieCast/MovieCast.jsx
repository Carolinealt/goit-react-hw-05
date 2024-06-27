import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { movieCredits } from "../../api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      const data = await movieCredits(movieId);
      const cast = data.data.cast;
      setCastList(() => cast);
    };
    getCast();
  }, [setCastList, movieId]);
  return (
    <>
      <div className={css.container}>
        <ul className={css.list}>
          {castList.map((actor) => (
            <li key={actor.cast_id} className={css.listItem}>
              <div className={css.containerActor}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt=""
                  className={css.imgActor}
                />
                <p className={css.about}>Character - {actor.character}</p>
                <p className={css.about}>Actor - {actor.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieCast;
