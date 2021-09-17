// Define Action Types as Constants
const SET_COMMENTS = 'comments/setComments'
const ADD_COMMENT = 'comments/addComment'
const UPDATE_COMMENT = 'comments/updateComment'
const REMOVE_COMMENT = 'comments/removeComment'

// Define Action Creators
const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

// Define Thunks
export const fetchComments = () => async (dispatch) => {
    const res = await fetch('/api/comments');
    const comments = await res.json()
    dispatch(setComments(comments.comments))
}

export const postComment = (comment) => async (dispatch) => {
    const res = await fetch('/api/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comment
        })
    })

    if (res.ok) {
        const newComment = res.json()
        dispatch(addComment(newComment))
        return newComment
    }
}

export const createUpdate = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/${comment.commentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comment
        })
    })

    if (res.ok) {
        const updatedComment = await res.json();
        dispatch(updateComment(updatedComment));
        return updatedComment
    }
}

export const deleteComment = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(removeComment(commentId))
    }
}
// Define an initial state
const initialState = {};

// Define a reducer
const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            const newState = {}
            const arr = action.comments
            arr.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        }
        case ADD_COMMENT: {
            const newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        }
        case UPDATE_COMMENT: {
            const newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        }
        case REMOVE_COMMENT: {
            const newState = { ...state }
            delete newState[action.commentId]
            return newState
        }
        default:
            return state;
    }
}

// Export the reducer
export default commentsReducer

