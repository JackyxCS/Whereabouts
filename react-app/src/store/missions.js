// Define Action Types as Constants
const SET_USER_PREF = 'mission/SET_USER_PREF'
const SET_MISSIONS = 'missions/SET_MISSIONS'
const ADD_MISSIONS = 'missions/ADD_MISSIONS'
const REMOVE_MISSIONS = 'missions/REMOVE_MISSIONS'

// Define Action Creators
const setUserPref = (user) => ({
    type: SET_USER_PREF,
    user
})

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
export const userPref = (user, location) => async (dispatch) => {
    const res = await fetch(`/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(location)
    });

    if (res.ok) {
        const updatedUser = await res.json()
        dispatch(setUserPref(updatedUser))
        return updatedUser
    }
}

export const fetchMissions = () => async (dispatch) => {
    const res = await fetch('/api/missions');
    const missions = await res.json();
    dispatch(setUserMissions(missions))
}

export const postMissions = (missions) => async (dispatch) => {
    const res = await fetch('/api/missions', {
        method: 'POST',
        body: JSON.stringify(missions)
    })

    if (res.ok) {
        const missions = await res.json()
        dispatch(addUserMissions(missions))
        return missions
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