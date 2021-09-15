import {  useEffect, useState } from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { createPost, uploadPhoto } from '../../store/posts';

const CreatePostForm = () => {
    const dispatch = useDispatch()
    const user_id = useSelector(state => state.session.user.id)
    const [image1, setImage1] = useState("")
    const [image_2, setImage_2] = useState()
    const [image_3, setImage_3] = useState()
    const [image_4, setImage_4] = useState()
    const [image_5, setImage_5] = useState()
    const [post_lat,setPost_lat] = useState(0)
    const [ post_lng, setPost_lng] = useState(0)
    const [description, setDescription] = useState('')
    const [validationErrors,setValidationErrors] = useState([])

    const uploadFiles = e => {
        setImage1(e.target.files[0])
        // setImage_2(e.target.files[0])
        // setImage_3(e.target.files[0])
        // setImage_4(e.target.files[0])
        // setImage_5(e.target.files[0])
    }

    const updateDescription = (e) => setDescription (e.target.value)

    useEffect(()=>{

        const errors = []

        if(!image1)errors.push("Please include at least one photo")
        if(description.length< 0)errors.push("Description can not be Empty")
        setValidationErrors(errors)
    },[image1, description])

    const handleSubmit = async (e) =>{
        e.preventDefault()

       let image_1 = await dispatch(uploadPhoto(image1))
        const payload = {
            user_id,
            image_1,
            // post_lat,
            // post_lng,
            description
        }
        await dispatch(createPost(payload))
    }
    return(
        <>
        <div className="modal-wrapper-div">
            <form className="form-div" onSubmit={handleSubmit}>
                <div className="form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
            <input
            className='form-input'
            type='file'
            name='image_1'
            onChange={uploadFiles}
            value={image1}/>

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

export default CreatePostForm
