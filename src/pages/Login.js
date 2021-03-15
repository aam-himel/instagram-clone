import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';
import * as ROUTES from '../constants/routes';

const Login = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInValid = password === '' || email === '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit button clicked');

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Login Success!');
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      setEmail('');
      setPassword('');
      setError(err.message);
    }
  };

  // uses for updating page title`
  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone instagram" />
      </div>
      <div className="w-2/5 mr-2">
        <div className="flex flex-col justify-center justify-items-center  border border-black-400 px-6">
          <h1 className="flex justify-center w-full">
            <img
              src="./images/logo.png"
              alt="logo"
              className="mt-4 py-4 w-8/12"
            />
          </h1>

          {error && (
            <p className="text-sm text-red-400 font-normal p-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} method="POST">
            {/*  Email Field */}
            <input
              aria-label="Enter your Email"
              type="text"
              placeholder="Email Address"
              className="text-sm text-gray-base mr-3 py-5 px-4 h-2 mb-2 w-full border border-dark-400 rounded-sm"
              // eslint-disable-next-line arrow-body-style
              onChange={({target}) => setEmail(target.value)}
              value={email}
            />

            {/* Password Field */}
            <input
              aria-label="Enter your Password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              // eslint-disable-next-line arrow-body-style
              onChange={({target}) => setPassword(target.value)}
              value={password}
            />

            {/* LogIn Button */}
            <button
              type="submit"
              disabled={isInValid}
              className={` bg-blue-400 rounded-sm font-medium w-full mb-4 mt-2 py-1 text-gray-100 ${
                isInValid && ` opacity-50`
              }`}
            >
              Log In
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center mt-4 border border-black-400 px-6 py-4">
          <p className="text-sm font-normal">
            {' '}
            Don&lsquo;t have an account?
            <Link to="/signup" className="font-medium text-blue-400 pl-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
