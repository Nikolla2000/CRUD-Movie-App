import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import apiMovies from "../../../api/movies";
import CreateEditMovie from "../CreateEditMovie/CreateEditMovie";
import { routes } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, fetchMovieById } from "../../../store/features/movies/moviesAsyncActions";
import { movieByIdSelector } from "../../../store/features/movies/moviesSelectors";

const EditMoviePage = () => {
    const params = useParams();
    const movie = useSelector(movieByIdSelector(params.movieId))
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieById(params.movieId))
    }, [dispatch, params.movieId])

    const onSubmit = async (formValue) => {
        try {
            await dispatch(editMovie({ movieId: movie?.id, ...formValue }))
            navigate(routes.movies.path);
        } catch (error) {
            console.error({ error })
        }
    }

    if (!movie) {
        return <h1>LOADING!!!</h1>
    }

    return <CreateEditMovie onSubmit={onSubmit} movie={movie} title={`Edit ${movie.title}`} />
}

export default EditMoviePage;