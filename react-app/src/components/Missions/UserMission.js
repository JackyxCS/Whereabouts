import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom'
import { deleteMissions, fetchMissions } from '../../store/missions';
import MapContainer from '../Maps';
import styles from './UserMission.module.css'

const DisplayUserMission = () => {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const user = useSelector(state => state.session.user);
    const missionChoices = useSelector(state => Object.values(state.missionsReducer))

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
            <NavLink to="/missions/select">Pick Your Mission</NavLink>
        )
    } else if (missionChoices.length === 1) {
        if (Date.now() < Date.parse(missionChoices[0].created_at) + 86400000) {
            chooseMissions = (
                <>
                    <div>Your Active Mission:
                        <div>Lat: {missionChoices[0].mission_lat}</div>
                        <div>Lng: {missionChoices[0].mission_lng}</div>
                        <div>created_at: {missionChoices[0].created_at}</div>
                        <NavLink to="/missions">Change your location</NavLink>
                    </div>
                    <div className={styles.mapContainer}>
                        <MapContainer />
                    </div>
                </>
            )
        } else {
            chooseMissions = (
                <div>
                    <div>Your mission has expired</div>
                    <NavLink to="/missions">Choose Another Mission</NavLink>
                </div>
            )
        }
    }

    return (
        <div>This is the User Mission Box
            {chooseMissions}
        </div>
    )
}

export default DisplayUserMission