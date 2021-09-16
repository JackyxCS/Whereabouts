import {  useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch} from 'react-redux';
import { deletePost} from '../../store/posts';

const DeletePost = ({postId}) =>{

    const dispatch = useDispatch()
    const history = useHistory()
    const user_id = useSelector(state => state.session.user.id)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(postId)
        dispatch(deletePost(postId))


            history.push(`/users/${user_id}`)

    }

    return (


        <form
        id="delete"
        onSubmit={handleSubmit}>

        <button
        className="tertiary-button"
        type="submit "
        >
        Delete Post
        </button>
        </form>
    )


}
export default DeletePost
