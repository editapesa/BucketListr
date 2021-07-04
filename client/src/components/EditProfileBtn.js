import React from "react";
import { Link } from 'react-router-dom';
//import { useAuth0 } from "@auth0/auth0-react";

function EditProfileBtn(props) {
    return (
        <Link to='/profile'>
            <button onClick={props.onClick}>Edit Profile</button>
        </Link>
    );
  }

  export default EditProfileBtn;

//   <Redirect to='/profile'>
//         </Redirect>
        // window.location.replace("/profile");