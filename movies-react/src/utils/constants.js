import CreateMoviePage from "../components/movies/CreateMoviePage/CreateMoviePage"
import EditMoviePage from "../components/movies/EditMoviePage/EditMoviePage"
import MoviePage from "../components/movies/MoviePage/MoviePage"
import MoviesAllPage from "../components/movies/MoviesAllPage/MoviesAllPage"

const routes = {
    movies: { path: '/movies', name: 'movies', includeInNavigation: true, element: <MoviesAllPage /> },
    movieById: { path: '/movies/:movieId', name: '', includeInNavigation: false, element: <MoviePage /> },
    createMovie: { path: '/movies/create', name: 'create movie', includeInNavigation: true, element: <CreateMoviePage /> },
    editMovieById: { path: '/movies/edit/:movieId', name: '', includeInNavigation: false, element: <EditMoviePage /> },
    // ADD MORE ROUTES
}

export {
    routes,
}