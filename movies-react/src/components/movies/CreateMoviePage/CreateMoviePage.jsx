import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createMovie } from '../../../store/features/movies/moviesAsyncActions';
import { routes } from '../../../utils/constants';
import CreateEditMovie from '../CreateEditMovie/CreateEditMovie';

const CreateMoviePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (formValue) => {
        try {
            await dispatch(createMovie(formValue));
            // navigate(routes.movies.path);
        } catch (error) {
            console.error({ error })
        }
    }

    return <CreateEditMovie onSubmit={onSubmit} title='Create Movie' />
}

export default CreateMoviePage;