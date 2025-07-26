import css from '../css/ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.text}>There was an error, please try again...</p>
  );
}