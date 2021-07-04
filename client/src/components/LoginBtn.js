// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginBtn = () => {
//   const { loginWithRedirect } = useAuth0();
//   return (
//     <button
//       className="btn btn-primary btn-block"
//       onClick={() => loginWithRedirect()}
//     >
//       Log In
//     </button>
//   );
// };

// export default LoginBtn;


// function LoginButton(props) {
//     return (
//         <Link to="/login">
//             <LoginBtn />
//         </Link>
//     );
//   }
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.editProflieClick = this.editProflieClick.bind(this);
//         this.state = {isLoggedIn: false };
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }

//     editProflieClick() {
//         <Redirect to='/profile'>
//         </Redirect>
//         // window.location.replace("/profile");
//     }

//     componentDidMount() {
//         // api stuff       
//     }
    
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <header className='header p-3'>
//                 <Row>
//                     <Col size='6'>
//                         <h1>BucketListr</h1>
//                     </Col>
//                     <Col size='6'>
//                         {isLoggedIn 
//                         ? <EditProfileButton onClick={this.editProflieClick} /> 
//                         : <LoginButton onClick={this.handleLoginClick} />
//                         }
//                     </Col>
//                 </Row>
//             </header>
//         );
//     }
// }

// export default Header;