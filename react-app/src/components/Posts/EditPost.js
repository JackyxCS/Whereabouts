import {  useEffect, useState } from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { editPost } from '../../store/posts';

const EditPost = ({post}) =>{

    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    const [validationErrors,setValidationErrors] = useState([])
    const updateDescription = (e) => setDescription (e.target.value)

    useEffect(()=>{

        const errors = []


        if(description.length< 0)errors.push("Description can not be Empty")
        setValidationErrors(errors)
    },[ description])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const payload = {
            post_id:post.id,
            description

        }
        console.log(payload,`<<<<<<<PAYLOAD_EDIT`)
        await dispatch(editPost(payload))
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
            onChange={updateDescription}/>

            <button className="primary-button form-submit" type='submit'>Post Mission</button>

            </form>
        </div>

        </>
    )
}

export default EditPost
