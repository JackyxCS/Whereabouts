import {  useEffect, useState } from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { editPost } from '../../store/posts';
import { useHistory } from 'react-router-dom';
import './EditPost.css'
const EditPost = ({postId, setShowModal}) =>{

    const dispatch = useDispatch()
    const history = useHistory()
    const posts = useSelector(state => state?.posts)
    const postDescription = posts[postId].description
    const [description, setDescription] = useState(postDescription)
    const [validationErrors,setValidationErrors] = useState([])
    const updateDescription = (e) => setDescription (e.target.value)

    useEffect(()=>{

        const errors = []


        if(description.length === 0)errors.push("Description can not be Empty")
        setValidationErrors(errors)
    },[ description])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const payload = {
            post_id:postId,
            description

        }
        await dispatch(editPost(payload))
        setShowModal(false)

        history.push(`/posts/${postId}`)


    }
    return(
        <>
        <div className="modal-wrapper-div">
            <form className="form-div" onSubmit={handleSubmit}>
                <div className="form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <textarea
            className='form-input'
            name='description'
            onChange={updateDescription}
            value={description}/>


            <button className="primary-button form-submit" type='submit'>Done</button>

            </form>
        </div>

        </>
    )
}

export default EditPost
