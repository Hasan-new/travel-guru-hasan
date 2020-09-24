import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Component/Booking/Booking';
import Hotels from './Component/Hotels/Hotels';
import LogIn from './Component/LogIn/LogIn';
import PrivateRoute from './Component/PrivateRoute/privateRoute';
import Header from './Component/Header/Header';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>

        <Route path="/Home"> 
        <Home></Home>
        </Route>
        <Route path="/Booking/:id">
          {/* : er pore jeta dewa asay, oita dynamic vabe receive hobe */}
          <Booking></Booking>
        </Route>
        
        <PrivateRoute path="/Hotels">
          <Header></Header>
          <Hotels></Hotels>
        </PrivateRoute>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/LogIn">
          <LogIn></LogIn>
        </Route>

      </Switch>
    
      </Router>
      </UserContext.Provider>
  );
}

export default App;
