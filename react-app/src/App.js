import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
// import LoginFormModal from './components/auth/LoginFormModal';
import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import SUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Missions from './components/Missions/Missions';
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
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Homepage />
        </Route>

        {/* switch to protect route later! */}
        <Route path='/missions' exact={true}>
          <h1>Missions!</h1>
          {/* <Missions /> */}
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
