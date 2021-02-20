import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

const App = () => {
  const history = useHistory();
  
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    // history.push('/login');
  }


  return (
    <Router>
      {/* <div>
        <Button onClick={logoutHandler}>Logout</Button>
      </div> */}
      <div className="App">
        <PrivateRoute exact path="/" component={BubblePage} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute