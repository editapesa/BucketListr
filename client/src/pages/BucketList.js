//this is for the 6th wire frame screen
//displays polished bucket list with user name, pic, bio/overview

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { List, ListItem } from '../components/List';
import API from '../utils/API';
//import Col from '../components/Col';
import Row from '../components/Row';
import Container from "../components/Container";

function BucketList() {
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

      // figure out how to get user info

      return (
          <Container>
              {/* <image>{user.photo}</image>
              <h1>{user.username}</h1>
              <p>{user.bio}</p> */}
              {/* change to display only 8 list items  */}
              <Row>
                {listItems.length ? (
                    <List>
                        {listItems.map(listItem => (
                            <ListItem key={listItem._id}>
                                <Link to={listItem.url + listItem._id}>
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

    export default BucketList;
    