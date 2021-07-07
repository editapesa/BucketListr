import React, { Component } from 'react';
import axios from 'axios';
import Row from '../Row';
import Col from '../Col';
import { Link } from 'react-router-dom';
//import style file ?


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
            <header className='navbar p-3'>
                <Row>
                    <Col size='4'>
                        <h1>BucketListr</h1>
                    </Col>                   
                        {loggedIn ? (
                            <div className='navbar'>
                                <Col size='4'>
                                    <Link to="/" className='btn btn-link text-dark' onClick={this.logout}>
                                    <span className='text-dark'>Log Out</span></Link>
                                </Col>
                            </div>            
                ) : (                  
                        <div className='navbar'>
                            <Col size='4'>
                                <Link to="/login" className='btn btn-link text-dark'>
                                    <span className='text-dark'>Log In</span></Link>
                            </Col>
                        </div>
                    )}
                </Row>   
            </header>
        );
    }
}

export default Navbar;