import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { movieReviews } from "../../api";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [isError, setIsError] = useState({ isShow: false, message: '' })

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    try {
      setIsError(
        { isShow: false, message: '' }
      );
      const getReviews = async () => {
        const data = await movieReviews(movieId);
        const list = data.data.results;
        setReviews(() => list);
      };
      getReviews();

    } catch (error) {
      setIsError({ isShow: true, message: error.message })

    }
  }, [setReviews, movieId, setIsError]);
  return (
    <>
      <div className={css.container}>
        {isError.isShow && <Error message={isError.message} />}

        <ul className={css.list}>
          {reviews.map((el) => {
            return (
              <li key={el.id} className={css.listItem}>
                <h4>{el.author}</h4>
                <p>rated: {el.author_details.rating}</p>
                <p>{el.content}</p>
              </li>
            );
          }, [])}
        </ul>
      </div>
    </>
  );
};

export default MovieReviews;
