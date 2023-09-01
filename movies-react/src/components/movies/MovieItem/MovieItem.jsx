import { Link } from "react-router-dom";
import styles from './MovieItem.module.css';

const MovieItem = (props) => {
    const { movie } = props;

    // description
    // posterUrl
    // rating
    // title

    return <div className={styles.wrapper}>
        <Link to={`/movies/${movie.id}`}>
            <p className={styles.text}>{movie.title}</p>
            <img className={styles.poster} src={movie.posterUrl} alt={movie.title} />
        </Link>
        <p className={styles.text}>Rating: {movie.rating}</p>
    </div>

}

export default MovieItem;