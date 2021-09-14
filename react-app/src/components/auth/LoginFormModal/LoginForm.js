import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="modal-wrapper-div">
      <form className="form-div" onSubmit={onLogin}>
        <div className='form-errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <input
          className='form-input'
          name='email'
          type='text'
          placeholder='email address'
          value={email}
          onChange={updateEmail}
        />
        <input
          className='form-input'
          name='password'
          placeholder='password'
          type='password'
          value={password}
          onChange={updatePassword}
        />
        <button className="primary-button form-submit"type='submit'>Login</button>
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

export default LoginForm;
