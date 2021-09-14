// Define Action Types as Constants
// const SET_USER_PREF = 'mission/SET_USER_PREF'
const SET_MISSIONS = 'missions/SET_MISSIONS'
const ADD_MISSIONS = 'missions/ADD_MISSIONS'
const REMOVE_MISSIONS = 'missions/REMOVE_MISSIONS'

// Define Action Creators
// const setUserPref = (user) => ({
//     type: SET_USER_PREF,
//     user
// })

const setUserMissions = (missions) => ({
    type: SET_MISSIONS,
    missions
})

const addUserMissions = (missions) => ({
    type: ADD_MISSIONS,
    missions
})

const removeUserMissions = (missions) => ({
    type: REMOVE_MISSIONS,
    missions
})

// Define Thunks
export const updateUserPref = (user, location) => async (dispatch) => {
    const res = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(location)
    });

    if (res.ok) {
        const updatedUser = await res.json()
        return updatedUser
    }
}

export const fetchMissions = () => async (dispatch) => {
    const res = await fetch('/api/missions');
    const missions = await res.json();
    dispatch(setUserMissions(missions))
}

export const postMissions = (missions) => async (dispatch) => {
    console.log("missions", missions)
    console.log(missions["location1"]["newLatitude"])
    const res = await fetch('/api/missions/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: missions["userId"],
            newLat1: missions["location1"]["newLatitude"],
            newLong1: missions["location1"]["newLongitude"],
            newLat2: missions["location2"]["newLatitude"],
            newLong2: missions["location2"]["newLongitude"],
            newLat3: missions["location3"]["newLatitude"],
            newLong3: missions["location3"]["newLongitude"],
        })
    })

    if (res.ok) {
        const missions = await res.json()
        dispatch(addUserMissions(missions))
        return null;
    } else {
        return ['An error occurred.']
    }
}

export const deleteMissions = (userId) => async (dispatch) => {
    const res = await fetch('/api/missions', {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(removeUserMissions(userId))
    }
}

// Define an initial state
const initialState = {};

//Define a reducer
const missionsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_USER_PREF: {
        //     const newState = {...state}
        //     action.user
        // }
        case SET_MISSIONS: {
            const newState = {}
            action.missions.forEach(mission => {
                newState[mission.id] = mission
            })
            return newState
        }
        case ADD_MISSIONS: {
            const newState = { ...state }
            action.missions.forEach(mission => {
                newState[mission.id] = mission
            })
            return newState
        }
        case REMOVE_MISSIONS: {
            const newState = { ...state }
            action.missions.forEach(mission => {
                delete newState[mission.id]
            })
            return newState
        }
        default:
            return state;
    }
}

// Export the reducer
export default missionsReducer