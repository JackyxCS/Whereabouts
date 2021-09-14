// Actions

const LOAD_POST= 'post/LOAD_POST'
const LOAD_ONE = 'posts/LOAD_ONE'
const ADD_POST= 'post/ADD_POST'
const EDIT_POST= 'post/EDIT_POST'
const REMOVE_POST= 'post/REMOVE_POST'

//Action Creators
const loadPosts = (posts) =>({
    type: LOAD_POSTS,
    posts

})
const loadPost = (post) =>({
    type: LOAD_ONE,
    post

})
const addPost = (post) => ({
    type: ADD_POST,
    post
})
const editPost = (post) =>({
    type: EDIT_POST,
    post
})
const deletePost = (postId) => ({
    type: REMOVE_POST,
    postId
})

//THUNKS
const getAllPosts = () =>  async dispatch =>{
    const response = await fetch(`/api/posts`);

    if(response.ok){
        const posts = await response.json()
        dispatch(loadPost(posts))
    }
}

const getOnePost = (postId) => async dispatch =>{
    const response = await fetch(`/api/posts/${postId}`)

    if(response.ok){
        const post = await response.json()
        dispatch(loadPost(post))
    }
}

const createPost = (payload) => async dispatch =>{
//    const {
//        user_id,
//        image_1,
//        image_2,
//        image_3,
//        image_4,
//        image_5,
//        post_lat,
//        post_lng,
//        description,
//    } = payload
    const response = await fetch(`/api/posts/new`,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{"Content-Type": "multipart/form-data"}

    })

}


//INITIAL STATE
const initialState = {}
