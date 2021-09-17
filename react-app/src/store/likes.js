// Define Action Types as Constants

const SET_LIKES = 'likes/setLikes'
// const ADD_LIKE = 'likes/addLike'

const REMOVE_LIKE = 'likes/removeLike'

// Define Action Creators
const setLikes = (likes) => ({
    type: SET_LIKES,
    likes
})
// const addLike = (like) =>({
//     type: ADD_LIKE,
//     like
// })

const deleteLike = (like) => ({
    type: REMOVE_LIKE,
    like
})

export const getPostLikes = (postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`)
    const likes = await res.json()
    dispatch(setLikes(likes.likes))
}

export const addPostLike = ({ user_id, post_id }) => async (dispatch) => {

    const data = new FormData()
    data.append("user_id", user_id)
    data.append('post_id', post_id)

    const res = await fetch(`/api/posts/${post_id}/likes`,
        {
            method: 'POST',
            body: data
        });

    if (res.ok) {
        return
    }
}

export const removePostLike = (post_id, like_id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post_id}/likes/${like_id}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(deleteLike(like_id))
    }
}

// Define an initial state
const initialState = {};

// Define a reducer
const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIKES: {
            const newState = {}
            const arr = action.likes
            arr.forEach(like => {
                newState[like.id] = like
            })
            return newState
        }
        case REMOVE_LIKE: {
            const newState = { ...state }
            delete newState[action.like_id]
            return newState
        }
        default:
            return state;
    }
}

export default likesReducer