import React from 'react';
import { Button, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        console.log(e.target);
        console.log(name,email,password,url);
        }

    return (
        <div className='mb-5'>
        <Form onSubmit={handleRegister}  className='w-50 mx-auto mt-5'>
   <Form.Group className="mb-3" controlId="formBasicName">
     <Form.Label>Your Name</Form.Label>
     <Form.Control type="name" name='name' placeholder="Enter Name" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" name='email' placeholder="Enter email" />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" name='password' placeholder="Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Accept Terms & Conditions" />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicURL">
     <Form.Label>Photo URL</Form.Label>
     <Form.Control type="url" name='url' placeholder="Photo URL" />
   </Form.Group>

   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form> 
     </div>
    );
};

export default Register;