import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postMissions, updateUserPref, deleteMissions, fetchMissions } from '../../store/missions';
import styles from './Missions.module.css'
import { useHistory } from 'react-router';


const UserLocationForm = () => {
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

        // radius of the earth in miles
        const rEarth = 3961;

        // calculate 1 degree latitude in miles
        const miles = rEarth * 2 * Math.PI / 360;

        // generate random distance within max in miles in a NON-UNIFORM way
        // to generate random points over the unit disk, we cannot use two uniformly distributed
        // variables because that would give a concentration of points in the center
        const maxDistance = max;
        const r = (maxDistance * Math.random() ** 0.5);

        // generate random angle in radians
        const theta = Math.random() * 2 * Math.PI;

        // calculates randomized changes to user's latitude and longitude
        const dy = r * Math.sin(theta);
        const dx = r * Math.cos(theta);

        // creates new latitude and longitude coordinates for user
        // latitude: the angular distance of a place north or south of the earth's equator
        // longitude: the angular distance of a place east or west of the meridian
        // note: 1 degree of latitude is always ~69 miles BUT 1 degree of longitude is ~69 miles
        // at the equator but 0 miles at the poles (not equidistant), so we need to adjust the newLongitude
        // based on distance from equator
        let newLatitude = latitude + dy / miles;
        let newLongitude = longitude + dx / (miles * Math.cos(degreesToRadian(latitude)));

        // get distance between current location and randomized location
        // const distance = getDistanceBetweenInMiles(latitude, longitude, newLatitude, newLongitude);

        return {
            newLatitude,
            newLongitude,
            // rounds distance to one decimal place
            // distance: Math.round(distance * 10) / 10
        };
    }

    function degreesToRadian(deg) {
        return deg * (Math.PI / 180)
    }

    useEffect(() => {
        const errors = [];
        if (Number.isNaN(Number(lat))) errors.push("Latitude is required")
        if (Number.isNaN(Number(lng))) errors.push("Longitude is required")
        if (Number.isNaN(Number(radius))) errors.push("Enter maximum radius")
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
        history.push(`/users/${userId}`)

    }

    return (
        <form onSubmit={handleSubmit} className={styles.missionForm}>
            <p>
                <a href="https://www.latlong.net/" className="form-instructions" style={{ color: "var(--wa-blue)", textDecoration: "underline", marginBottom: '10px' }} target={"_blank"} rel={"noreferrer"}>Get your coordinates</a>
            </p>
            <label className={styles.missionLabels}>Latitude</label>
            <input
                placeholder="Latitude"
                type="number"
                step="any"
                name="lat"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
            />
            <label className={styles.missionLabels}>Longitude</label>
            <input
                placeholder="Longitude"
                type="number"
                step="any"
                name="lng"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                required
            />
            <label className={styles.missionLabels}>Max Distance</label>
            <input
                placeholder="Maximum Distance"
                type="number"
                step="any"
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
    )
}

export default UserLocationForm
