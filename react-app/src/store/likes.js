// Define Action Types as Constants

const ADD_LIKE = 'likes/addLike'

const REMOVE_LIKE = 'likes/removeLike'

// Define Action Creators
const addLike = (like) =>({
    type: ADD_LIKE,
    like
})

const deleteLike = (like) =>({
    type: REMOVE_LIKE,
    like
})

export const addPostLike = (payload) => async (dispatch) => {

    const {
        user_id,
        post_id
    }=payload
    const data = new FormData()
    data.append("user_id",user_id)
    data.append('post_id', post_id)


    const res = await fetch(`/api/posts/${post_id}/likes`,
    {
        method: 'POST',
       body:data
    });
    
}
