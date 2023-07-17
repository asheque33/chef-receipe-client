// import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import app from '../../firebase/firebase.config';
import { FaEye,FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const {handleGoogleSignIn} = useContext(AuthContext);
    const {handleGithubSignIn} = useContext(AuthContext);

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isVisible, setVisible] = useState(false);    

    const handleLogin = (e) => {
        // prevent the login event from firing because the user is already logged in and not logged in again     
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form,email,password);

//  Login with Email & Password
        signIn(email,password)
        .then((result) =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User logged in successfully');
                setError('');
                form.reset();
        })
        .catch((error) => {
            console.log(error.message);
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess('');
            form.reset(); })
            // -----------  ------------
    // Login with Google
    handleGoogleSignIn()
    .then ((result) =>{
        const googleLoggedIn = result.user;
        console.log(googleLoggedIn);
        setSuccess('User with Google logged in successfully')
        setError('');  })
        .catch((error) => {
            console.log(error);
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess(''); }) 
        // -----  ---- ------ ----
    // Login with GitHub
    handleGithubSignIn()
    .then((result) =>{
        const githubLoggedIn = result.user;
        console.log(githubLoggedIn);
        setSuccess('User with Github logged in successfully')
        setError('');  })
    .catch((error) => {
            console.log(error);
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess(''); })
        // ---- ---- ----- -------
                                };
    // handleLogin____end_____
    
    const toggle = () => {
        setVisible(!isVisible)
    }

    return (
        <div className='w-50 mx-auto mt-4'>
            <h2 className='text-center'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />

        </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type={!isVisible ? "password" : "text"} name='password' className="form-control" id="password" placeholder="Password" required />
        <span className="icon" onClick={toggle} >
        {!isVisible ? 
        <div className='w-25 mt-3 d-flex flex-row justify-content-evenly align-items-center '><FaEye /> <small>Show Password</small></div>
          :
         <div className='w-25 mt-3 d-flex flex-row justify-content-evenly align-items-center '><FaEyeSlash /> <small>Hide Password</small></div> }  </span>
       
            </div>
               
            <button type="submit" className="btn btn-primary">Login</button>
            </form>

<div className='mt-2 '>
<button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-primary me-4"><FaGoogle/> Google SignIn </button>
<button onClick={handleGithubSignIn} type="button" className="btn btn-outline-info"><FaGithub/> Github SignIn </button>
</div>

    <p className='text-danger mt-2'>{error}</p>
    <p className='text-success mt-2'>{success}</p>
    <p>Not have an account yet? Do <Link className='text-decoration-none mt-2' to='/register'>Register</Link> </p>

        </div>
    );
};

export default Login;