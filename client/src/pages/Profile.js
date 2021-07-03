//this is for the user profile wire frame 
//user can add/edit profile pic, brief bio/overview, email, pw
//stretch goal - add/edit background pic

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import API from "../utils/API";
//import { Link } from "react-router-dom";

//this has to be modified so that profile/user info can be edited
function Profile() {
    const { user } = useAuth0();
    const { username, email, password, photo, bio } = user;
  
    return (
      <div>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={photo}
              alt="Profile Pic"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{username}</h2>
            <p className="lead text-muted">{email}</p>
          </div>
          <div className='row'>
            <p className='text-muted'>{password}</p>
          </div>
          <div className='row'>
            <p>{bio}</p>
          </div>
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    );
  };
  
  export default Profile;