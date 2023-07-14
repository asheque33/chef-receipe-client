// import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import app from '../../firebase/firebase.config';
import { FaEye,FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isVisible, setVisible] = useState(false);    const emailRef = useRef();
    // const auth = getAuth(app);

    const handleLogin = (e) => {
        // prevent the login event from firing because the user is already logged in and not logged in again     
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // Integrate with firebase
        // const auth = getAuth(app);
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((result) => {
        //         const loggedInUser = result.user;
        //         console.log(loggedInUser);
        //         setSuccess('User logged in successfully');
        //         setError('')
        //         form.reset();
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         const errorMessage = error.message;
        //         setError(errorMessage);
        //         setSuccess('');
        //         form.reset();
        //     })
    };

    // const handleResetPassword = () => {
    //     const resetEmail = emailRef.current.value;
    //     // console.log(resetEmail);
    //     if (!resetEmail) {
    //         alert('Please provide your email address to reset password')
    //         return;
    //     }
    //     sendPasswordResetEmail(auth, resetEmail)

    //         .then(() => {
    //             alert('Please check your email')
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //             // setError(error.message)
    //         })
    // }

    const toggle = () => {
        setVisible(!isVisible)
    }


    return (
        <div className='w-50 mx-auto mt-4'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" ref={emailRef} aria-describedby="emailHelp" placeholder="Enter email" required />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type={!isVisible ? "password" : "text"} name='password' className="form-control" id="password" placeholder="Password" required />
                    <span className="icon" onClick={toggle} >
        {!isVisible ? 
        <div className='w-25 mt-3 d-flex flex-row justify-content-evenly align-items-center '><FaEye /> <small>Show Password</small></div>  :
         <div className='w-25 mt-3 d-flex flex-row justify-content-evenly align-items-center '><FaEyeSlash /> <small>Hide Password</small></div> } 
                     </span>
       
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

{/* onClick={handleResetPassword}/; */}
            <p><small>Forget your password?Please <button  className='btn btn-link'>Reset Password</button></small></p>
            <p>Not have an account yet?Do <Link className='text-decoration-none' to='/register'>Register</Link> </p>

            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;