import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from "../../../store/features/movies/moviesAsyncActions";
import { moviesSelector } from "../../../store/features/movies/moviesSelectors";
import MovieItem from "../MovieItem/MovieItem";
import styles from './MoviesAllPage.module.css';

const MoviesAllPage = () => {
    const movies = useSelector(moviesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMovies());
    }, [dispatch])

    return <div>
        <h1>MoviesAllPage</h1>
        <div className={styles.wrapper}>
            {movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default MoviesAllPage;