import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { movieByIdComments } from "../../../store/features/movies/moviesSelectors";
import CommentItem from "../CommentItem/CommentItem";

const CommentsList = () => {
    const params = useParams();
    const comments = useSelector(movieByIdComments(params.movieId));

    return <div>
        {comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)}
    </div>
}

export default CommentsList;