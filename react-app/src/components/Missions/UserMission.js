import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchMissions } from '../../store/missions';
import MapContainer from '../Maps';
import UserLocationForm from './Missions';
import styles from './UserMission.module.css'

const DisplayUserMission = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const user = useSelector(state => state.session.user);
    const missionChoices = useSelector(state => Object.values(state?.missionsReducer))

    // console.log(Date.parse(missionChoices[0].created_at))
    // console.log('expires', Date.parse(missionChoices[0].created_at) + 86400000)
    // console.log(Date.now() > Date.parse(missionChoices[0].created_at) + 86400000)

    useEffect(() => {
        dispatch(fetchMissions())
    }, [dispatch])

    let chooseMissions

    if (missionChoices.length === 0) {
        chooseMissions = (
            <NavLink to="/missions">Choose Your Next Mission</NavLink>
        )
    } else if (missionChoices.length === 3) {
        chooseMissions = (
            <NavLink to="/missions/select" className="primary-button">Pick Your Mission</NavLink>
        )
    } else if (missionChoices.length === 1) {
        if (Date.now() < Date.parse(missionChoices[0].created_at) + 86400000) {
            chooseMissions = (
                <div className={styles.userMissionContainer}>
                    <div className={styles.missionInfo}>Active Mission Expires Every 24 Hours
                        <div>Mission: ({missionChoices[0].mission_lat.toFixed(6)}, {missionChoices[0].mission_lng.toFixed(6)})</div>
                        <div>Mission Began: {missionChoices[0].created_at}</div>
                        <div>Time Remaining: {((Date.parse(missionChoices[0].created_at) + 86400000 - Date.now()) / 3600000).toFixed(1)} Hours</div>
                        <MapContainer missions={missionChoices} />
                    </div>
                    {/* <div className={styles.updateLocation}> Update Your Location
                        <UserLocationForm />
                    </div> */}
                </div>
            )
        } else {
            chooseMissions = (
                <div>
                    <div className={styles.missionInfo}>Your Mission Has Expired</div>
                    <NavLink to="/missions">Choose Another Mission</NavLink>
                </div>
            )
        }
    }

    return (
        <div className="mission-dashboard-container">
            <h2>Mission Dashboard</h2>
            {chooseMissions}
        </div>
    )
}

export default DisplayUserMission
