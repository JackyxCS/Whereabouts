const GET_USERS = 'session/GET_USERS'
const initialState = {}
const getUsers = (users) =>({
    type: GET_USERS,
    users
  })
export const fetchUsers = () => async (dispatch) =>{

    const response = await fetch(`/api/users/`);
    const users = await response.json();
      dispatch(getUsers(users["users"]))
  }
const usersReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_USERS:
        const newState = {}
        const arr = action.users
        arr.forEach(user => {
          newState[user.id]= user
        })
        return newState

      default:
        return state;
    }}
export default usersReducer
