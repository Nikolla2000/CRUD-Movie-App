import { faStar, faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { movieByIdSelector } from '../../../store/features/movies/moviesSelectors';
import { useParams } from "react-router";
import { rateMovie } from "../../../store/features/movies/moviesAsyncActions";
const generateRatings = (ratingCount, rating) => {
    return new Array(ratingCount)
        .fill(null)
        .map(
            (_, index) => ({
                id: new Date().toISOString() + index,
                value: index + 1,
                filled: index + 1 <= rating
            })
        )
}

const RateMovie = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const movie = useSelector(movieByIdSelector(params.movieId))

    const ratings = useMemo(() => generateRatings(5, movie.rating), [movie.rating]);

    const onClickRate = (chosenRating) => {
        dispatch(rateMovie({ movieId: movie.id, rating: chosenRating }))
    }

    return <div>
        {ratings.map((rate) => <button onClick={() => onClickRate(rate.value)}>
            <FontAwesomeIcon icon={rate.filled ? faStar : faStarOfDavid} />
        </button>)}
    </div>
}

export default RateMovie;