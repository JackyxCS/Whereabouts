import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchComments, postComment } from '../../store/comments';

const CommentForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { postId } = useParams();
    const user = useSelector(state => state.session.user)
    const { id: userId } = user

    const [comment, setComment] = useState('')
    const [validationErrors, setValidationErrors] = useState([])

    useEffect(() => {
        const errors = [];
        if (comment.length === 0) errors.push("Please leave a comment")
        setValidationErrors(errors)
    }, [comment])

    const reset = () => {
        setComment('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            postId,
            comment
        }

        let newComment = await dispatch(postComment(payload))
        if (newComment) {
            reset()
            dispatch(fetchComments());
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Leave a comment"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                type="submit"
                disabled={validationErrors.length > 0}
            >
                Submit Review
            </button>
        </form>
    )
}

export default CommentForm