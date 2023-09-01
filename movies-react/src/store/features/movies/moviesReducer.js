import { createSlice } from "@reduxjs/toolkit"
import { fetchMovieByIdError, fetchMovieByIdFullFilled, fetchMovieByIdLoading } from "./moviesActions";
import { commentMovie, createMovie, deleteMovie, editMovie, fetchAllMovies, rateMovie } from "./moviesAsyncActions"

const initialState = {
    movies: [],
    loading: false,
    error: null,
}

const moviesSlice = createSlice({
    initialState: initialState,
    name: 'movies',
    reducers: {
        clearMovieError: (state) => {
            state.error = null;
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchAllMovies.pending, (state) => {
            state.loading = true;
        });
        addCase(fetchAllMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        });
        addCase(fetchAllMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        });
        addCase(fetchMovieByIdLoading, (state, action) => {
            state.loading = true;
        })
        addCase(fetchMovieByIdFullFilled, (state, action) => {
            state.loading = false;

            const movieIndex = state.movies.findIndex(({ id }) => id === action.payload.id);

            if (movieIndex < 0) {
                state.movies.push(action.payload);
            } else {
                state.movies[movieIndex] = action.payload;
            }
        })
        addCase(fetchMovieByIdError, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        addCase(commentMovie.pending, (state) => {
            // state.loading = true;
        })
        addCase(commentMovie.fulfilled, (state, action) => {
            console.log({ PAYLOAD: action.payload });
            const movie = state.movies.find((movie) => movie.id === action.payload.movieId);
            if (movie) {
                movie.comments = [action.payload.comment, ...movie.comments];
            }
        })
        addCase(commentMovie.rejected, (state, action) => {
            state.error = action.payload;
        })
        addCase(rateMovie.pending, (state) => {
            // state.loading = true;
        })
        addCase(rateMovie.fulfilled, (state, action) => {
            const movie = state.movies.find(({ id }) => id === action.payload.movieId);
            if (movie) {
                movie.rating = action.payload.newRating;
            }
            // state.loading = true;
        })
        addCase(rateMovie.rejected, (state, action) => {
            state.error = action.payload;
        })
        addCase(deleteMovie.pending, (state) => {
            // state.loading = true;
        })
        addCase(deleteMovie.fulfilled, (state, action) => {
            console.log(action.payload)
            state.movies = state.movies.filter(({ id }) => id !== action.payload);
        })
        addCase(deleteMovie.rejected, (state, action) => {
            state.error = action.payload;
        })
        addCase(createMovie.pending, (state) => {
            state.loading = true;
        })
        addCase(createMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.movies.push(action.payload);
        })
        addCase(createMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        addCase(editMovie.pending, (state) => {
            state.loading = true;
        })
        addCase(editMovie.fulfilled, (state, action) => {
            state.loading = false;

            const movieIndex = state.movies.findIndex(({ id }) => id === action.payload.id);

            if (movieIndex > -1) {
                state.movies[movieIndex] = action.payload;
            }
        })
        addCase(editMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { clearMovieError } = moviesSlice.actions;
export default moviesSlice.reducer;