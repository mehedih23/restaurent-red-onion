import './Signup.css'
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup'>
            <div>
                <img className='mb-3' src="https://i.ibb.co/Ln9GbY8/logo2.png" alt="brand logo" />
            </div>
            <div className='w-50'>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Sign up
                    </Button>
                </Form>
                <p>Already Have an account? <Link to='/login' className='text-danger'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup