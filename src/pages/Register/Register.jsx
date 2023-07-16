import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const {createUser} = useContext(AuthContext)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isVisible, setVisible] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const form = {name, email, password, url}
        console.log(form);
      if(password.length < 6){
      setError('password should be at least 6 characters');
      setSuccess(''); }else{
        setSuccess('User registered Successfully');
      setError('');   }
        
   console.log(name,email,password,url);
        createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser)})
        .catch((error) => {console.log(error)});
                                };

        const toggle = () => {
          setVisible(!isVisible)
      }
    
    return (
        <div className='w-50 mx-auto mt-2 mb-4'>
          <h2 className='text-center'>Please Register</h2>
        <Form onSubmit={handleRegister}  >
   <Form.Group className="mb-3" controlId="formBasicName">
     <Form.Label>Your Name</Form.Label>
     <Form.Control type="name" name='name' placeholder="Enter Name" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" name='email' placeholder="Enter email" required />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicURL">
     <Form.Label>Photo URL</Form.Label>
     <Form.Control type="url" name='url' placeholder="Photo URL" />
   </Form.Group>
   
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type={!isVisible ? "password" : "text"} name='password' placeholder="Password" required />
     <span className="icon" onClick={toggle} >
        {!isVisible ? 
        <div className='w-25 mt-3 d-flex flex-row justify-content-evenly align-items-center '><FaEye /> <small>Show Password</small></div>  :
         <div className='w-25 mt-3 d-flex flex-row justify-content-evenly align-items-center '><FaEyeSlash /> <small>Hide Password</small></div> } 
                     </span>
   </Form.Group>

   <Button variant="primary" type="submit">
     Register
   </Button>
 </Form> 

 <p className='text-danger mt-2'>{error}</p>
 <p className='text-success mt-2'>{success}</p> 

 <p className='mt-2'>Already have an account? Go to <Link className='text-decoration-none' to='/login'>Login</Link> </p>


     </div>
    );
};

export default Register;