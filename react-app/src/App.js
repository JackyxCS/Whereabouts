import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/Nav/NavBar';
import Homepage from './components/Homepage.js';
import ExploreAuth from './components/Explore/ExploreAuth.js';
import ExplorePreview from './components/Explore/ExplorePreview.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/User';
import UserLocationForm from './components/Missions/Missions';
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
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute> */}
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/explore' exact={true} >
          <ExploreAuth />
        </ProtectedRoute>
        <Route path='/preview' exact={true} >
          <ExplorePreview />
        </Route>
        <Route path='/' exact={true} >
          <Homepage />
        </Route>

        {/* switch to protect route later! */}
        <ProtectedRoute path='/missions' exact={true}>
          <h1>Missions!</h1>
          <UserLocationForm />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
