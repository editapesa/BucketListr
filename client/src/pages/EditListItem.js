import React, { useState, useEffect } from "react";
//import { useParams } from 'react-router-dom';
import API from '../utils/API';
import { Input, AddImage, SaveBtn, DeleteOption } from '../components/Form';
import Row from '../components/Row';
import Container from "../components/Container";
//import Col from '../components/Col';

function EditListItem(props) {
    
    const [listItem, setListItem] = useState({})

    //const {id} = useParams();
    useEffect(() => {
        API.getListItem()
            .then(res => setListItem(res.data))
            .catch(err => console.log(err));
    }, [])

    const loadListItem=(id) => {
        API.getListItem(id)
        //    .then(res => setListItem(res.data))
           .catch(err => console.log(err));
    };

    function deleteListItem(id) {
        API.deleteListItem(id)
            .then(res => loadListItem())
            .catch(err => console.log(err));
    }

    function saveListItem(id) {
        API.saveListItem(id)
        .then(res => loadListItem())
        .catch(err => console.log(err));
    }

    return (
        <Container>
            <Row>         
                <Input>
                    {listItem.title}
                </Input>        
                <Input>
                    {listItem.url}
                </Input>
                <AddImage>
                    {listItem.image}
                </AddImage>
                <SaveBtn onClick={() => saveListItem(listItem._id)}>
                    Save
                </SaveBtn>
                <DeleteOption onClick={() => deleteListItem(listItem._id)}>
                    Delete
                </DeleteOption>     
            </Row>
        </Container>
    );
}

export default EditListItem;