//this is for the 4th screen in wire frame
//user can see list of Bucket List items
//options to add items, or click on an existing item to edit/delete 
/// edit/delete options will be on another page

import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { List, ListItem } from '../components/List';
import { Link } from 'react-router-dom';
import Row from '../components/Row';
import Container from "../components/Container";

function Dashboard() {
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        loadListItems()
    }, [])

    function loadListItems() {
        API.getListItems()
           .then(res =>
               setListItems(res.data)
           )
           .catch(err => console.log(err));
    };

    return (
        <Container>
            <Row>
               <h3>Add a New Goal</h3>
               <button> + </button>
            </Row>
            <Row>
                {listItems.length ? (
                    <List>
                        {listItems.map(listItem => (
                            <ListItem key={listItem._id}>
                                <Link to={'/listitem/' + listItem._id}>
                                    {listItem.title}
                                </Link>
                            </ListItem>
                    ))}
                    </List>
                ) : (
                    <h3>No List Items to Display</h3>
                )}
            </Row>
        </Container>
    );
}

export default Dashboard;