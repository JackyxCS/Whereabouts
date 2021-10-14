import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button className="secondary-button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
