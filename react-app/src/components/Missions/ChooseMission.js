import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { fetchMissions, postMission, deleteMissions } from '../../store/missions';

const ChooseMissionForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const missionChoices = useSelector(state => Object.values(state.missionsReducer))
    const { id: userId, user_lat: userLat, user_lng: userLng } = user

    const [currentMission, setCurrentMission] = useState();
    const [validationErrors, setValidationErrors] = useState([])

    function getDistanceBetweenInMiles(lat1, lon1, lat2, lon2) {
        // radius of the earth in miles
        const rEarth = 3961;

        // convert degrees to radian
        const rLat = degreesToRadian(lat2 - lat1);
        const rLon = degreesToRadian(lon2 - lon1);

        // implementation of the Haversine formula for calculating
        // geographic distance on earth (great-circle distance between
        // two points on the surface of a sphere)
        const a =
            Math.sin(rLat / 2) * Math.sin(rLat / 2) +
            Math.cos(degreesToRadian(lat1)) * Math.cos(degreesToRadian(lat2)) *
            Math.sin(rLon / 2) * Math.sin(rLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // returns the angle of an (x,y) point
        const d = rEarth * c; // distance in miles = Radius of earth * c

        return d;
    }

    function degreesToRadian(deg) {
        return deg * (Math.PI / 180)
    }

    useEffect(() => {
        dispatch(fetchMissions())
    }, [dispatch])

    useEffect(() => {
        const errors = [];
        if (!currentMission) errors.push("Select a mission")
        setValidationErrors(errors)
    }, [currentMission])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validationErrors > 0) return;

        const missionPayload = {
            userId,
            currentMission
        }
        await dispatch(deleteMissions())
        await dispatch(postMission(missionPayload))
        history.push(`/users/${userId}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>a form</h1>
            {missionChoices.map(mission => (
                <div key={mission.id}>
                    <div>{mission.id}</div>
                    <div>{mission.mission_lat}</div>
                    <div>{mission.mission_lng}</div>
                    <div>{getDistanceBetweenInMiles(userLat, userLng, mission.mission_lat, mission.mission_lng)}</div>
                    <input
                        type='radio'
                        value={[mission.id, mission.mission_lat, mission.mission_lng]}
                        name='mission'
                        onChange={(e) => setCurrentMission(e.target.value)}
                    />
                </div>
            ))}

            <button
                type="submit"
                disabled={validationErrors.length > 0}
            >
                Submit
            </button>
        </form>
    );
}

export default ChooseMissionForm