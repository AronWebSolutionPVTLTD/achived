import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import ForgotPassword from './components/Forgotpassword';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Diagrams from './components/Diagram';

function App() {
  return (
    <div className="App">
    <Router>
    	<Route exact path="/" component={Landing} />
    	<Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
 	    <Route path="/contact" component={Contact} />
        <Route path="/diagram" component={Diagrams} />
    </Router>
    </div>
  );
}

export default App;
