import './Login.css'
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login vh-100'>
            <div>
                <img className='mb-3' src="https://i.ibb.co/Ln9GbY8/logo2.png" alt="brand logo" />
            </div>
            <div className='w-50'>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New To Red Onion? <Link to='/signup' className='text-danger'>Create an account</Link></p>
            </div>
        </div>
    )
}

export default Login