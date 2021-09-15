import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { fetchMissions, postMission, deleteMissions } from '../../store/missions';
import MapContainer from '../Maps';
import styles from './ChooseMission.module.css'

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

        return d.toFixed(1);
    }

    function degreesToRadian(deg) {
        return deg * (Math.PI / 180)
    }

    useEffect(() => {
        dispatch(fetchMissions())
    }, [dispatch])

    // useEffect(() => {
    //     const errors = [];
    //     if (!currentMission) errors.push("Select a mission")
    //     setValidationErrors(errors)
    // }, [currentMission])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // if (validationErrors > 0) return;

        const missionPayload = {
            userId,
            currentMission
        }
        await dispatch(deleteMissions())
        await dispatch(postMission(missionPayload))
        history.push(`/users/${userId}`)
    }

    return (
        <div className={styles.chooseMission}>
            {!!missionChoices && missionChoices?.map(mission => (
                <div key={mission?.id} className={styles.eachMission}>
                    <form onSubmit={handleSubmit}>
                        {/* <div key={mission?.id}> */}
                        <MapContainer missions={[mission]} />
                        {/* <div>{mission?.id}</div> */}
                        <div className={styles.missionInfo}>
                            <div>LAT: {mission?.mission_lat.toFixed(6)}, LNG: {mission?.mission_lng.toFixed(6)}</div>
                            {/* <div>{mission?.mission_lng}</div> */}
                            <div>{getDistanceBetweenInMiles(userLat, userLng, mission?.mission_lat, mission?.mission_lng)} miles away</div>
                            {/* </div> */}
                            <button className="primary-button"
                                type="submit"
                                value={[mission.id, mission.mission_lat, mission.mission_lng]}
                                disabled={validationErrors.length > 0}
                                onClick={(e) => setCurrentMission(e.target.value)}
                            >
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default ChooseMissionForm