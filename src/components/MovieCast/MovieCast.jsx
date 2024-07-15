import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { movieCredits } from "../../api";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isError, setIsError] = useState({ isShow: false, message: '' })

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsError(
          { isShow: false, message: '' }
        )
        const data = await movieCredits(movieId);
        const cast = data.data.cast;
        setCastList(() => cast);
      } catch (error) {
        setIsError({ isShow: true, message: error.message })
      }
    };
    getCast();

  }, [setCastList, movieId, setIsError]);
  return (
    <>
      <div className={css.container}>
        {isError.isShow && <Error message={isError.message} />}

        <ul className={css.list}>
          {castList.map((actor) => (
            <li key={actor.cast_id} className={css.listItem}>
              {console.log(actor)}
              <div className={css.containerActor}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={`Photo of ${actor.name}`}
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
