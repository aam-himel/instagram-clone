import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';

const Login = () => {
    
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError   ] = useState('');
    const isInValid = password === '' || email === '';

    const handleSubmit = () => {
        console.log('handle submit');
    }
    // uses for updating page title`
    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen '>
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt='iphone instagram'/>
            </div>
            <div className="flex w-2/5 flex-col border border-black-400 h-96 px-6">
                <div className='flex flex-col justify-center justify-items-center'>
                   <h1 className="flex justify-center w-full">
                   <img src='./images/logo.png' alt='logo' className="my-4 py-4 w-8/12"
                    />   
                    </h1>  
                    <form onSubmit={handleSubmit}>
                        
                        {/*  Email Field */}
                        <input 
                            aria-label='Enter your Email'
                            type='text'
                            placeholder='Email Address'
                            className="text-sm text-gray-base mr-3 py-5 px-4 h-2 mb-2 w-full border border-dark-400 rounded-sm"
                            // eslint-disable-next-line arrow-body-style
                            onChange={({target}) => setEmail(target.value)}
                            value={email}
                        />

                        {/* Password Field */}
                        <input 
                            aria-label='Enter your Password'
                            type='password'
                            placeholder='Password'
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            // eslint-disable-next-line arrow-body-style
                            onChange={({target}) => setPassword(target.value)}
                            value={password}
                        />

                        {/* LogIn Button */}
                        <button 
                            type='button'
                            disabled={isInValid} 
                            className={` bg-blue-400 rounded-sm font-medium w-full mt-2 py-1 text-gray-100 ${isInValid && ` opacity-50`}`}>
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
