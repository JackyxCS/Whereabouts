import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { postMissions, updateUserPref, deleteMissions, fetchMissions } from '../../store/missions';


const LocationForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const { id: userId } = user

    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [radius, setRadius] = useState('');
    const [validationErrors, setValidationErrors] = useState([])

    function generateLocation(latitude, longitude, max) {
        // convert to number
        latitude = parseFloat(latitude)
        longitude = parseFloat(longitude)
        max = parseFloat(max)

        const rEarth = 3961;
        const miles = rEarth * 2 * Math.PI / 360;
        const maxDistance = max;
        const r = (maxDistance * Math.random() ** 0.5);
        const theta = Math.random() * 2 * Math.PI;
        const dy = r * Math.sin(theta);
        const dx = r * Math.cos(theta);

        let newLatitude = latitude + dy / miles;
        let newLongitude = longitude + dx / (miles * Math.cos(degreesToRadian(latitude)));

        return {
            newLatitude,
            newLongitude,
        };
    }

    function degreesToRadian(deg) {
        return deg * (Math.PI / 180)
    }

    useEffect(() => {
        const errors = [];
        if (lat?.length === 0) errors.push("Latitude is required")
        if (lng?.length === 0) errors.push("Longitude is required")
        if (radius?.length === 0) errors.push("Maximum distance is required")
        setValidationErrors(errors)
    }, [lat, lng, radius])

    useEffect(() => {
        setLat(user ? user.user_lat : '');
        setLng(user ? user.user_lng : '');
        setRadius(user ? user.user_radius : '');
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors > 0) return;

        const location1 = generateLocation(lat, lng, radius)
        const location2 = generateLocation(lat, lng, radius)
        const location3 = generateLocation(lat, lng, radius)

        const userPayload = {
            userId,
            lat,
            lng,
            radius,
        }

        const randomLocationPayload = {
            userId,
            location1,
            location2,
            location3,
        }

        await dispatch(updateUserPref(userPayload))
        await dispatch(deleteMissions())
        await dispatch(postMissions(randomLocationPayload))
        await dispatch(fetchMissions())
        setShowModal(false)
        history.push(`/users/${userId}`)
    }

    return (
        <div className="modal-wrapper-div">
            <form onSubmit={handleSubmit} className="form-div">
                <p className="form-instructions">Enter latitude and longitude as decimal numbers and distance in miles</p>
                <a href="https://www.latlong.net/" className="form-instructions" style={{color:"white" , textDecoration:"underline"}} target={"_blank"} rel={"noreferrer"}>Get your coordinates</a>
                <input
                    className='form-input'
                    placeholder="Latitude"
                    type="number"
                    name="lat"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    required
                />

                <input
                    className='form-input'
                    placeholder="Longitude"
                    type="number"
                    name="lng"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    required
                />

                <input
                    className='form-input'
                    placeholder="Maximum Distance"
                    type="number"
                    name="dist"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    required
                />

                <button className="primary-button"
                    type="submit"
                    disabled={validationErrors.length > 0}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LocationForm;
