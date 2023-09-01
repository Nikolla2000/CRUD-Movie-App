import { createAction } from "@reduxjs/toolkit"
import { moviesActionTypes } from "./moviesActionTypes";

export const fetchMovieByIdLoading  = createAction(moviesActionTypes.MOVIES_GET_BY_ID_LOADING);
export const fetchMovieByIdFullFilled  = createAction(moviesActionTypes.MOVIES_GET_BY_ID_FULFILLED);
export const fetchMovieByIdError = createAction(moviesActionTypes.MOVIES_GET_BY_ID_REJECTED);