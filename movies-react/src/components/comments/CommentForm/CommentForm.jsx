import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { commentMovie } from "../../../store/features/movies/moviesAsyncActions";
import { movieByIdSelector } from "../../../store/features/movies/moviesSelectors";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";

const INITIAL_STATE = { author: '', content: '' };

const CommentForm = () => {
    const [formValue, setFormValue] = useState(INITIAL_STATE);

    const params = useParams();
    const movie = useSelector(movieByIdSelector(params.movieId))
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(commentMovie({ movieId: movie.id, author: formValue.author, content: formValue.content }))

    }

    const onChange = (key, value) => {
        setFormValue((prevState) => ({ ...prevState, [key]: value }))
    }

    return <form onSubmit={onSubmit}>
        <Input
            label={'author'}
            onChangeValue={onChange}
            name={'author'}
            placeholder={'Your name'}
            value={formValue.author}
        />
        <TextArea
            label={'message'}
            onChangeValue={onChange}
            name={'content'}
            placeholder={'Your opinion'}
            value={formValue.content}
        />
        <button type="submit">send</button>
    </form>
}

export default CommentForm;