import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';

const Login = () => {
    
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    

    document.title = 'login - page';
    return (
        <div>
            <p>Login details page</p>
        </div>
    )
}

export default Login;
