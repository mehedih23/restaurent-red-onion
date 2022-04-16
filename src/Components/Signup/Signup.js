import './Signup.css'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';

const Signup = () => {
    const [createUserWithEmailAndPassword, user0, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);


    const [name, setName] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }

    const [email, setEmail] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('')
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const [confirmPassword, setConfirmPassword] = useState('')
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {

        return <div className='loading'> <ClimbingBoxLoader color={'steelblue'} loading={loading} size={15} /></div>;
    }

    const logout = () => {
        signOut(auth);
    };


    if (user) {
        return (
            <div>
                <p>Current User: {user.email}</p>
                <button onClick={logout}>Log out</button>
            </div>
        );
    }
    console.log(user);
    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return toast.error("Password did't matched!", { id: 'password-error' });
        }
        else {
            createUserWithEmailAndPassword(email, password)
                .then(() => {
                    toast.success("Account Created Successfully!", { id: 'account-created' });
                })
        }
    }


    return (
        <div className='signup'>
            <div>
                <img className='mb-3' src="https://i.ibb.co/Ln9GbY8/logo2.png" alt="brand logo" />
            </div>

            <div className='w-50'>
                <Form onSubmit={handleSignUpSubmit}>
                    <Form.Group className="mb-4" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleName} required type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPassword} required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    {error}
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