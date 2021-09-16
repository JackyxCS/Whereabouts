import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/auth/ProtectedRoute';

import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Nav/Footer';
import Homepage from './components/Homepage/Homepage.js';

import ExploreAuth from './components/Explore/ExploreAuth.js';
import ExplorePreview from './components/Explore/ExplorePreview.js';
import PostDetail from './components/Posts/PostDetail.js';

import User from './components/User';
// import UsersList from './components/UsersList';
import UserLocationForm from './components/Missions/Missions';
import ChooseMissionForm from './components/Missions/ChooseMission'
import DisplayUserMission from './components/Missions/UserMission';
// import MapContainer from './components/Maps/index';

import { authenticate } from './store/session';
import { getAllPosts } from './store/posts';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {

    (async () => {
      await dispatch(authenticate());
      await dispatch(getAllPosts())

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className="content-container">
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
            <DisplayUserMission />
          </ProtectedRoute>

          <ProtectedRoute path='/posts/:postId' exact={true} >
            <PostDetail />
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
            <h1>Enter Your Location Information</h1>
            <UserLocationForm />
          </ProtectedRoute>

          <ProtectedRoute path='/missions/select' exact={true}>
            <div>Select a mission below!</div>
            <ChooseMissionForm />
          </ProtectedRoute>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
