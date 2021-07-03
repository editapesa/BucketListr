//this is for the 6th wire frame screen
//displays polished bucket list with user name, pic, bio/overview

import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_LISTITEMS, LOADING } from '../utils/actions';
import API from '../utils/API';
import Col from '../components/Col';
import Row from '../components/Row';
import Container from "../components/Container";
import { useAuth0 } from "@auth0/auth0-react";

function BucketList() {
    const [state, dispatch] = useStoreContext();
  
    const getListItems = () => {
        dispatch({ type: LOADING });
        API.getListItems()
          .then(results => {
            dispatch({
              type: UPDATE_LISTITEMS,
              listItems: results.data
            });
          })
          .catch(err => console.log(err));
      };
    
      useEffect(() => {
        getListItems();
      });

      // figure out how to get user info
      const { user } = useAuth0();
      const { username, photo, bio } = user;

      return (
          <div>
              <image>{photo}</image>
              <h1>{username}</h1>
              <p>{bio}</p>
              {/* change to display only 8 list items  */}
              {state.listItems.length ? (
                <Container>
                {state.listItems.map(listItem => (
                    <Row>
                    <Col> {listItem._id}
                    <Link to={'/listitem/' + listItem._id}>
                        {listItem.title}
                    </Link>
                    </Col>
                    <Col> {listItem.image}
                    </Col>
                    </Row>
                ))}
              </Container>
              ) : (
                <h3>You haven't added any list items yet!</h3>
              )}
          </div>
      );
    }

    export default BucketList;
    