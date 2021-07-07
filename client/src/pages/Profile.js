//this is for the user profile wire frame 
//user can add/edit profile pic, brief bio/overview, email, pw
//stretch goal - add/edit background pic

//import React, { Component } from "react";
//import API from "../utils/API";
//import { Link } from "react-router-dom";

//this has to be modified so that profile/user info can be edited
// export default class Profile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
      
//     };
//   }

//   render() {
//     const { currentUser } = this.state;

//     return (
//       <div>
//         <div className="row align-items-center profile-header">
//           <div className="col-md text-center text-md-left">
//             <h2>{currentUser.username}</h2>
//           </div>
//           <div className="col-md-2 mb-3">
//             <img
//               src={currentUser.photo}
//               alt="Profile Pic"
//               className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//             />
//           </div>
//           <div className='row'>
//             <p className="lead text-muted">{currentUser.email}</p>
//           </div>
//           <div className='row'>
//             <p className='text-muted'>{currentUser.password}</p>
//           </div>
//           <div className='row'>
//             <p>{currentUser.bio}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
  
