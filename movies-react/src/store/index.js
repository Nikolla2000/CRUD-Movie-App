import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesReducer';

export const store = configureStore({ reducer: { movies: moviesReducer } });