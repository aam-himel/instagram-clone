import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';
import {doesUserNameExist} from '../srevices/firebase';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInValid = password === '' || email === '';

  // Signup function
  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log('Submit button clicked');

    const userNameExists = await doesUserNameExist(username);
    if (!userNameExists.length) {
      try {
        const newCreatedUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        // Update profile display name
        await newCreatedUser.user.updateProfile({
          displayName: username,
        });

        // Firestore document update
        await firebase.firestore().collection('users').add({
          userId: newCreatedUser.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: newCreatedUser.user.email,
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD);
      } catch (err) {
        setFullName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setError(err.message);
      }
    } else {
      setUsername('');
      setError('That username has already been taken, Please try another.');
    }
  };

  // uses for updating page title`
  useEffect(() => {
    document.title = 'SignUp - Instagram';
    setEmail('');
    setPassword('');
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

          <form onSubmit={handleSignUp} method="POST">
            {/* UserName field */}
            <input
              aria-label="Username"
              type="text"
              className=" text-sm text-gray-base mr-3 py-5 px-4 h-2 mb-2 w-full border border-dark-400 rounded-sm"
              placeholder="User name"
              // eslint-disable-next-line arrow-body-style
              onChange={({target}) => setUsername(target.value)}
              value={username}
            />

            {/* Fullname Field */}

            <input
              aria-label="Full Name"
              type="text"
              className="text-sm mr-3 py-5 px-4 h-2 mb-2 w-full border border-dark-400 rounded-sm"
              placeholder="Full Name"
              // eslint-disable-next-line arrow-body-style
              onChange={({target}) => setFullName(target.value)}
              value={fullName}
            />

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

            {/* SignUp Button */}
            <button
              type="submit"
              disabled={isInValid}
              className={` bg-blue-400 rounded-sm font-medium w-full mb-4 mt-2 py-1 text-gray-100 ${
                isInValid && ` opacity-50`
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center mt-4 border border-black-400 px-6 py-4">
          <p className="text-sm font-normal">
            {' '}
            Already have an account?
            <Link to={ROUTES.LOGIN} className="font-medium text-blue-400 pl-2">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
