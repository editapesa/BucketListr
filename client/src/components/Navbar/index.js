import React, { Component } from 'react';
import axios from 'axios';
import Row from '../Row';
import Col from '../Col';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.ok) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Failed to log out.')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log(this.props);

        return (
            <header className='navbar p-3 justify-content-between'>
                <Row>
                    <Col size='12'>
                        <h2>BucketListr</h2>
                    </Col>
                    {loggedIn ? (
                        <Col size='6'>
                            <Link to="/" className='btn' onClick={this.logout}>Log Out</Link>
                        </Col>
                    ) : (
                        <Col size='6'>
                            <Link to="/login" className='btn'>Log In</Link>
                        </Col>
                    )}
                </Row>
            </header>
        );
    }
}

export default Navbar;