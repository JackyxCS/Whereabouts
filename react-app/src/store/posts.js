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
export const uploadPhoto = (photo) => async () =>{
    const dataBlob = new FormData()
    dataBlob.append('photo', photo)
    const response = await fetch('/api/posts/aws_upload',{
        method:'post',
        headers: {
            'Content-Type': "multipart/form-data"
        },
        body: dataBlob
    })
    if (response.ok){
        const awsUrl = await response.json()
        const imgUrl = awsUrl.image_1_url
        return imgUrl

    }
}

export const createPost = (payload) => async dispatch =>{

    const response = await fetch(`/api/posts/new`,{
        method: 'POST',
        body: JSON.stringify(payload),


    })

}


export const editPost = (payload) => async dispatch =>{
    const {
        description,
        post_id
    } = payload
    const data = {
        description,
        post_id
    }
    const response = await fetch(`/api/posts/${post_id}`,{
        method: 'PUT',
        body: JSON.stringify(data)
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
        const post_id = await response.json().post_id
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
