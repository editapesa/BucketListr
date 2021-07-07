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
import { Input, SaveBtn } from '../components/Form';
import DeleteBtn from "../components/DeleteBtn";
import UploadImage from "../components/UploadImage";

function Dashboard() {
    const [listItems, setListItems] = useState([])
    const [formObject, setFormObject] = useState({})

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

    function deleteListItem(id) {
        API.deleteListItem(id)
            .then(res => loadListItems())
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title ) {
          API.saveListItem({
            title: formObject.title,
            url: formObject.url,
            image: formObject.image
          })
            .then(res => loadListItems())
            .catch(err => console.log(err));
        }
    };

    return (
        <Container>
            <Row>
               <h3>Add a New Goal</h3>
            </Row>
            <Row>
                <form>
                    <Input
                        onChange={handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <Input
                        onChange={handleInputChange}
                        name="url"
                        placeholder="https://www.url.com (optional)"
                    />
                    <UploadImage />

                    <SaveBtn
                        disabled={!(formObject.title)}
                        onClick={handleFormSubmit}
                    >
                        Save
                    </SaveBtn>
                </form>
            </Row>
            <Row>
                {listItems.length ? (
                    <List>
                        {listItems.map(listItem => (
                            <ListItem key={listItem._id}>
                                <Link to={'/listitem/' + listItem._id}>
                                    {listItem.title} 
                                </Link>
                                
                                <DeleteBtn onClick={() => deleteListItem(listItem._id)} />
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