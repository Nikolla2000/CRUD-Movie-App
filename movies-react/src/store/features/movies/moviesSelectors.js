import { createSelector } from "@reduxjs/toolkit";

const moviesReducerSelector = (state) => state.movies;

export const moviesSelector = createSelector(moviesReducerSelector, (state) => state.movies);
export const moviesLoading = createSelector(moviesReducerSelector, ({ loading }) => loading);
export const moviesError = createSelector(moviesReducerSelector, ({ error }) => error);
export const movieByIdSelector = (movieId) =>
    createSelector(moviesReducerSelector,
        ({ movies }) => {
            const movie = movies.find((movie) => movie.id === movieId);

            if (!movie) {
                return null;
            }
            const newMovie = { ...movie };

            newMovie.comments = movie.comments.slice().sort((c1, c2) =>
                new Date(c2.date).getTime() - new Date(c1.date).getTime()
            );

            return newMovie;
        }
    );

export const movieByIdComments = (movieId) => createSelector(moviesReducerSelector,
    movieByIdSelector(movieId),
    (_, movie) => {
        if (!movie) {
            return [];
        }
        return movie.comments;
    })