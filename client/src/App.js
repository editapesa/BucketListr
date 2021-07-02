import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
//import BucketList from './pages/BucketList';
//import EditListItem from './pages/EditListItem';
import Header from "./components/Header";
import './App.css';


function App() {
  // fetch login and set it to state. Login sent to header
  // let [userLogIn, setUserLogIn] = useState(false);

  // console.log(userLogIn);
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
        {/* <Route exact path='/bucketlist' component={BucketList} /> */}
        {/* <Route exact path='/editlistitem' component={EditListItem} /> */}
      </div>
    </Router>
  );
}

export default App;
