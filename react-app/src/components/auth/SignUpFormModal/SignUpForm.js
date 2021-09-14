import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../../store/session';

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
    // if (password === repeatPassword) {
    const data = await dispatch(signUp(username, email, password, repeatPassword));
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
    <div className="login-form-div">
      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (<div key={ind}>{error}</div>))}
        </div>
        <div>
          {/* <label>User Name</label> */}
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
          className='form-input'
            type='text'
            name='email'
            placeholder='email address'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          {/* <label>Password</label> */}
          <input
          className='form-input'
            type='text'
            name='password'
            placeholder='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          {/* <label>Repeat Password</label> */}
          <input
            className='form-input'
            type='text'
            name='repeat_password'
            placeholder='confirm password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button className="primary-button" type='submit'>Sign Up</button>
      </form>
      <div className="demo-user-div">
        <p>Wanna take a look around first?</p>
        <button className="secondary-button" onClick={demoLogin}>
          Try Demo
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
