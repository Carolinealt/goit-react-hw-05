import css from "./NotFoundPage.module.css";

const NotFoundPage = ({ message }) => {
  return (
    <>
      <p className={css.error}>{message}</p>
    </>
  );
};

export default NotFoundPage;
