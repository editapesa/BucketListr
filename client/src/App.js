import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BucketList from './pages/BucketList';
import EditListItem from './pages/EditListItem';
import Navbar from "./components/Navbar";
import Profile from './pages/Profile';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      {/* Main App Container */}
      <div classname="mainAppContainer">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/bucketlist' component={BucketList} />
          <Route path='/listitem/:id' component={EditListItem} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
