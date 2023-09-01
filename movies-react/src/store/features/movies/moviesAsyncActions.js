import { createAsyncThunk } from "@reduxjs/toolkit";
import apiMovies from "../../../api/movies";
import { fetchMovieByIdError, fetchMovieByIdFullFilled, fetchMovieByIdLoading } from "./moviesActions";
import { moviesActionTypes } from "./moviesActionTypes";

export const fetchAllMovies = createAsyncThunk(moviesActionTypes.MOVIES_FETCH_ALL, () => {
    return apiMovies.getAll();
})
// MOVIE BY ID - OLD ASYNC ACTION
export const fetchMovieById = (movieId) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieByIdLoading())
            const data = await apiMovies.getById(movieId)
            dispatch(fetchMovieByIdFullFilled(data))
        } catch (error) {
            dispatch(fetchMovieByIdError(error))
        }
    }
}
// MOVIE BY ID - OLD ASYNC ACTION

export const commentMovie = createAsyncThunk(moviesActionTypes.MOVIES_ADD_COMMENT, async (params) => {
    const { movieId, author, content } = params;

    try {
        const response = await apiMovies.comment(movieId, author, content)
        return { comment: response, movieId }
    } catch (error) {
        throw error;
    }
})

export const rateMovie = createAsyncThunk(moviesActionTypes.MOVIES_ADD_RATE, (params) => {
    const { movieId, rating } = params;

    return apiMovies
        .rate(movieId, rating)
        .then((newRating) => ({ movieId, newRating }))
        .catch(error => error)
})

export const deleteMovie = createAsyncThunk(moviesActionTypes.MOVIES_DELETE_MOVIE, async (movieId) => {
    try {
        await apiMovies
            .delete(movieId)

        return movieId;
    } catch (error) {
        return movieId;
    }
})

export const createMovie = createAsyncThunk(moviesActionTypes.MOVIES_CREATE, (params) => {
    const { title, description, posterUrl, youtubeId } = params;

    return apiMovies.create(title, description, posterUrl, youtubeId);
})

export const editMovie = createAsyncThunk(moviesActionTypes.EDIT_MOVIE, (params) => {
    const { movieId, title, description, posterUrl, youtubeId } = params;

    return apiMovies.edit(movieId, title, description, posterUrl, youtubeId)
})