// Actions

const LOAD_POSTS= 'post/LOAD_POSTS'
const LOAD_ONE = 'posts/LOAD_ONE'
const ADD_POST= 'post/ADD_POST'
const REMOVE_POST= 'post/REMOVE_POST'

//Action Creators
const loadPosts = (posts) =>({
    type: LOAD_POSTS,
    posts

})
const loadOne = (post) =>({
    type: LOAD_ONE,
    post

})
const addPost = (post) => ({
    type: ADD_POST,
    post
})

const remove = (postId) => ({
    type: REMOVE_POST,
    postId
})

//THUNKS
export const getAllPosts = () =>  async dispatch =>{
    const response = await fetch(`/api/posts/`);

    if(response.ok){
        const posts = await response.json().then(res=>res = res.posts)
        dispatch(loadPosts(posts))
    }
}

export const getOnePost = (postId) => async dispatch =>{
    const response = await fetch(`/api/posts/${postId}`)

    if(response.ok){
        const post = await response.json()
        dispatch(loadOne(post))
    }
}


export const createPost = (payload) => async dispatch =>{

        const data = new FormData()
        data.append('user_id' ,payload.user_id)
        data.append('image_1',payload.image_1)
        data.append('image_2',payload.image_2)
        data.append('image_3',payload.image_3)
        data.append('image_4',payload.image_4)
        data.append('image_5',payload.image_5)
        data.append('post_lat',payload.post_lat)
        data.append('post_lng',payload.post_lng)
        data.append('description',payload.description)


    const response = await fetch(`/api/posts/new`,{
        method: 'POST',
        body: data

    });
    if(response.ok){
        const newPost = await response.json()
        dispatch(addPost(newPost))

    }

}


export const editPost = (payload) => async dispatch =>{

    const {
        description,
        post_id
    } = payload

    const data = new FormData()
    data.append('description' ,description)
    const response = await fetch(`/api/posts/${post_id}`,{
        method: 'PUT',
        body: data
    });
    if(response.ok){
        const post = await response.json()
        dispatch(addPost(post))
    }


}


export const deletePost = (payload) => async dispatch =>{
    const post_id = Number(payload)
    const response = await fetch(`/api/posts/${post_id}`,{
        method: 'DELETE'

    });
    if(response.ok){
        const postRes = await response.json()
        const post_id = postRes.post_id

        dispatch(remove(post_id))
    }

}


//INITIAL STATE
const initialState = {}



const postReducer = (state= initialState, action) =>{
    let newState
    switch(action.type){
        case LOAD_POSTS:
            newState = {...state};
            action.posts.forEach(post =>{
                newState[post.id] = post
            })
            return newState

        case LOAD_ONE:
            newState = {...state};
            newState[action.post.id] = action.post
            return newState

        case ADD_POST:
            if(!state[action.post.id]){
                newState = {
                    ...state,
                    [action.post.id]: action.post
                }
                return newState
            }else return{
                ...state,
                [action.post.id]:{
                    ...state[action.post.id],
                    ...action.post
                }

            }
        case REMOVE_POST:
            newState = {...state}
            delete newState[action.postId]
            return newState
        default:
            return state;
    }
}
export default postReducer
