//this is for the 2nd screen in wireframe 
//for user to log in

import React, { useState } from "react";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);

    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Unable to log in.')
            }
        })   
    };

    return (
        <div>
            <div className='mt-4'>
                <h2>Log In</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className='mt-3 px-5'>
                    <Row className='form-group'>
                        <Col size='12'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='username'
                                name='username'
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col size='12'>
                            <input
                                className='form-control'
                                type='password'
                                placeholder='password'
                                name='password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <div className='form-group'>
                        <button 
                            className='btn btn-success' type='submit'>
                            Log In
                        </button>
                    </div>
                </Container>
            </form>
        </div>
    );
}

export default Login;

