import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../../store/session';
import { fetchUsers } from '../../../store/users';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(username, email, password, repeatPassword));
    dispatch(fetchUsers())
    if (data) {
      setErrors(data)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="modal-wrapper-div">
      <form className="form-div" onSubmit={onSignUp}>
        <div className='form-errors'>
          {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
        </div>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='username'
          onChange={updateUsername}
          value={username}
        ></input>
        <input
        className='form-input'
          type='text'
          name='email'
          placeholder='email address'
          onChange={updateEmail}
          value={email}
        ></input>
        <input
        className='form-input'
          type='password'
          name='password'
          placeholder='password'
          onChange={updatePassword}
          value={password}
        ></input>
        <input
          className='form-input'
          type='password'
          name='repeat_password'
          placeholder='confirm password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
        <button className="primary-button form-submit" type='submit'>Sign Up</button>
      </form>
      <div className="demo-user-div">
        <p className="demo-user-prompt">Wanna take a look around first?</p>
        <button className="secondary-button" onClick={demoLogin}>
          Try Demo
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
