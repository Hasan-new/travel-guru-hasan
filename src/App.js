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

          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d58430.27749765749!2d90.39681044937309!3d23.751218157593794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!3m2!1d23.806924499999997!2d90.36869779999999!4m5!1s0x3755b9b3e6e8411d%3A0xb44c1c70352d665e!2sNur%20Mohammad%20Market%2C%20Doyagonj%20New%20Rd%2C%20Dhaka!3m2!1d23.7096196!2d90.4256693!5e0!3m2!1sen!2sbd!4v1601065375223!5m2!1sen!2sbd" width="600" height="450" frameBorder="0"
 style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

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
