import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteMovie, fetchMovieById } from "../../../store/features/movies/moviesAsyncActions";
import { movieByIdSelector, moviesError, moviesLoading } from "../../../store/features/movies/moviesSelectors";
import { routes } from "../../../utils/constants";
import CommentForm from "../../comments/CommentForm/CommentForm";
import CommentsList from "../../comments/CommentsList/CommentsList";
import RateMovie from "../RateMovie/RateMovie";
import MovieDeleteModal from "./MovieDeleteModal";
import styles from './MoviePage.module.css';


const MoviePage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showEditbtn, setShowEditBtn] = useState(false);
    const dispatch = useDispatch();
    const movie = useSelector(movieByIdSelector(params.movieId))
    const loading = useSelector(moviesLoading);
    const error = useSelector(moviesError);

    useEffect(() => {
        dispatch(fetchMovieById(params.movieId))
    }, [dispatch, params.movieId]);

    const onClickDelete = () => {
        setShowDeleteConfirm(true);
    }
    const onConfirmClick = async () => {
        try {
            await dispatch(deleteMovie(params.movieId))
            navigate(routes.movies.path);
        } catch (error) {
            navigate(routes.movies.path);
            console.log(error)
        }
    }

    const onCancelClick = () => {
        setShowDeleteConfirm(false);
    }

    const onClickEdit = () => {
        navigate(`/movies/edit/${movie.id}`)
    }

    if (loading || (!movie && !error)) {
        return < div >
            <p>LOADING...</p>
        </div >
    }
    if (error) {
        return <div>
            <p>{error}</p>
        </div>
    }


    return <>
        <div className={styles.wrapper}>
            <button className={styles.delete} onClick={onClickDelete}>X</button>
            <div>
                <img className={styles.poster} src={movie.posterUrl} alt={movie.title} />
                <h1
                    onMouseEnter={() => setShowEditBtn(true)}
                    onMouseLeave={() => setShowEditBtn(false)}
                >
                    <span>{movie.title}</span>
                    {showEditbtn ? <button onClick={onClickEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button> : null}
                </h1>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${movie.youtubeId}`}
                allowFullScreen={true}
                title={movie.title}
                width={700}
                height={400}
            />
            <RateMovie />
            <p className={styles.description}>{movie.description}</p>
            <CommentForm />
            <CommentsList />
        </div>
        {
            showDeleteConfirm ? <MovieDeleteModal
                onCancelClick={onCancelClick}
                onConfirmClick={onConfirmClick}
            /> : null
        }
    </>
}

export default MoviePage;