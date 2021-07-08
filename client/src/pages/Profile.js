//this is for the user profile wire frame 
//user can add/edit profile pic, brief bio/overview, email, pw
//stretch goal - add/edit background pic

import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from '../components/Col';
import { List, ListItem } from '../components/List';
import { Input, TextArea, SaveBtn } from '../components/Form';
import UploadImage from "../components/UploadImage";

function Profile(props) {
    const [user, setUser] = useState([])
    const [formObject, setFormObject] = useState({})

    //const {id} = useParams()
    useEffect(() => {
        API.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [])

    const loadUser=(id) => {
        API.getUser(id)
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function saveUser(id) {
        API.saveUser(id)
        .then(res => loadUser())
        .catch(err => console.log(err));
    }

    return (
        <Container>
            <Row>
                <Col size='6'>
                    <List>
                        <ListItem key={user._id}>
                            <h1> {user.username} </h1>
                            <p> {user.photo} </p>
                        </ListItem>
                    </List>
                </Col>
                <Col size='6'>
                    <Row>
                        <Link to='/dashboard'>Dashboard</Link>
                    </Row>
                    <Row>
                        <Link to='/bucketlist'>View List</Link>
                    </Row>
                </Col>
            </Row>
            <Row>
                <TextArea
                    onChange={handleInputChange}
                    name='bio'
                >
                    Update Overview
                </TextArea>
                <Input
                    onChange={handleInputChange}
                    name='email'
                    placeholder='Update Email'
                />
                <Input
                    onChange={handleInputChange}
                    name='password'
                    placeholder='Update Password'
                />
                <UploadImage />
                <SaveBtn onClick={() => saveUser(user._id)}>
                    Save
                </SaveBtn>
            </Row>
        </Container>
    )
}

export default Profile;

