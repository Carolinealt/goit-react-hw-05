import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { movieReviews } from "../../api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const data = await movieReviews(movieId);
      const list = data.data.results;
      setReviews(() => list);
    };
    getReviews();
  }, [setReviews, movieId]);
  return (
    <>
      <div className={css.container}>
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
