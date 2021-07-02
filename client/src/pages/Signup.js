//this is for the 3rd wire frame screen 
//displays user option to sign up

import React, { useState } from 'react';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

const Signup = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('username is ' + username);
        console.log('email is ' + email);
        console.log('password is ' + password);

        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Unable to sign up.')
            }
        })   
    };

    return (
        <div>
            <div className='mt-4'>
                <h2>Sign Up</h2>
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
                                type='email'
                                placeholder='email address'
                                name='email'
                                onChange={e => setEmail(e.target.value)}
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
                    <button className='btn btn-success' type='submit'><a href='/dashboard'>
                        Submit
                    </a></button>
                </Container>
            </form>
        </div>
    )
}

export default Signup;

