import React from 'react';
import Row from '../Row';
import Col from '../Col';
//import style file ?

function Header() {
    return (
        <header className='header p-3'>
            <Row>
                <Col size='6'>
                    <h1>BucketListr</h1>
                </Col>
                <Col size='6'>
                    <button><a href='/login'>Log In</a></button>
                </Col>
            </Row>
        </header>
    );
}

export default Header;