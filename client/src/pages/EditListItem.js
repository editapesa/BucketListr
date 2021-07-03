import React, { useState, useEffect } from "react";
import API from '../utils/API';
import { Input, TextArea, AddImage, SaveBtn, DeleteBtn } from '../components/Form';
import Row from '../components/Row';
import Container from "../components/Container";

function EditListItem() {
    const [listItem, setListItem] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadListItem()
    }, [])

    function loadListItem(id) {
        API.getListItem(id)
           .then(res =>
               setListItem(res.data)
           )
           .catch(err => console.log(err));
    };

    function deleteListItem(id) {
        API.deleteListItem(id)
            .then(res => loadListItem())
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.url && formObject.image) {
            API.saveListItem({
                title: formObject.title,
                url: formObject.url,
                image: formObject.image
            })
                .then(res => loadListItem())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container>
            <Row>
               <form>
                   <TextArea 
                        onChange={handleInputChange}
                        name="title"
                        placeholder='Enter a new goal (required)'
                    />
                    <Input 
                        onChange={handleInputChange}
                        name="url"
                        placeholder='https://www.url.com (optional)'
                    />
                    <AddImage 
                        onChange={handleInputChange}
                        name="image"
                        placeholder='Choose image file (optional)'
                    />
                    <SaveBtn
                        disabled={!(formObject.title && formObject.url && formObject.image)}
                        onClick={handleFormSubmit}
                    >
                        Save
                    </SaveBtn>
                    <DeleteBtn onClick={() => deleteListItem(listItem._id)} 
                    >
                        Delete
                    </DeleteBtn>
                </form> 
            </Row>
        </Container>
    );
}

export default EditListItem;