import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';

const Login = () => {
    
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError   ] = useState('');
    const isValid = password === '' || email === '';

    // uses for updating page title`
    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    return (
        <div className=''>
            <p>Login details page</p>
        </div>
    )
}

export default Login;
