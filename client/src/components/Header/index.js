import React from 'react';
import { Link } from 'react-router-dom';
import Row from '../Row';
import Col from '../Col';
import { Redirect } from 'react-router-dom';
//import { Component } from 'react';
//import style file ?

function LoginButton(props) {
    return (
        <Link to="/login">
            <button onClick={props.onClick}>Log In</button>
        </Link>
    );
  }
  
function EditProfileButton(props) {
    return (
        <Link to='/profile'>
            <button onClick={props.onClick}>Edit Profile</button>
        </Link>
    );
  }

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.editProflieClick = this.editProflieClick.bind(this);
        // this.setLogIn = this.props.setLogIn;
        this.state = {isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    editProflieClick() {
        // redirect to <Profile /> using app.js
        <Redirect to='/profile'>
        </Redirect>
        // window.location.replace("/profile");
    }

    componentDidMount() {
        // api stuff
        
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <EditProfileButton onClick={this.editProflieClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
    
        return (
            <header className='header p-3'>
                <Row>
                    <Col size='6'>
                        <h1>BucketListr</h1>
                    </Col>
                    <Col size='6'>
                        {button}
                        {/* {isLoggedIn ? 
                        <EditProfileButton onClick={this.editProflieClick} /> : <LoginButton onClick={this.handleLoginClick} />} */}
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;