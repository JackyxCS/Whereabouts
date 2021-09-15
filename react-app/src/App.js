import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
// import LoginFormModal from './components/auth/LoginFormModal';
import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import UserLocationForm from './components/Missions/Missions';
import ChooseMissionForm from './components/Missions/ChooseMission'
import DisplayUserMission from './components/Missions/UserMission';
// import MapContainer from './components/Maps/index';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path='/showmap' exact={true}>
          <MapContainer />
        </Route> */}
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
          <DisplayUserMission />
          {/* <MapContainer /> */}
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Homepage />
        </Route>

        {/* switch to protect route later! */}
        <ProtectedRoute path='/missions' exact={true}>
          <h1>Missions!</h1>
          <UserLocationForm />
        </ProtectedRoute>

        <ProtectedRoute path='/missions/select' exact={true}>
          <h1>Select a mission below!</h1>
          <h1>Missions expire at ...</h1>
          <ChooseMissionForm />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
