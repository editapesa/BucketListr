import React from 'react';
import Row from '../Row';
import Col from '../Col';
import { Link } from 'react-router-dom';
//import AuthenticationBtn from '../AuthenticationBtn';
//import style file ?


function Header(props) {
    return (
        <header className='header p-3'>
            <Row>
                <Col size='6'>
                    <h1>BucketListr</h1>
                </Col>
                <Col size='6'>
                <Link to="/login">
                    <button onClick={props.onClick}>Log In</button>
                </Link>
                </Col>
            </Row>
        </header>
    );
}

export default Header;